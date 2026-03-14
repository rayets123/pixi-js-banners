import React, { useEffect, useRef } from "react";
import { Application, Container, Sprite, Graphics } from "pixi.js";
import { loadFirstDepositTextures } from "./firstDepositTextures";

// Базовый размер "дизайнерского" контейнера персонажа
const CHAR_WIDTH = 580;
const CHAR_HEIGHT = 830;

const FirstDepositPixi: React.FC = () => {
  const canvasRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    let app: Application | null = null;
    let character: Container | null = null;
    let arm: Sprite | null = null;
    let hand: Sprite | null = null;
    let finger: Sprite | null = null;
    let head: Sprite | null = null;
    let leftHand: Sprite | null = null;
    let intervalId: number | undefined;
    let removeTicker: (() => void) | null = null;
    let destroyed = false;

    (async () => {
      try {
        app = new Application();
        await app.init({
          width: 1440,
          height: 800,
          backgroundAlpha: 1,
          antialias: true
        });

        if (!canvasRef.current || destroyed) {
          app.destroy();
          return;
        }

        canvasRef.current.appendChild(app.canvas);
        Object.assign(app.canvas.style, { width: "100%", height: "100%", objectFit: "contain", display: "block" });

        // Временный фон и тестовый прямоугольник, чтобы убедиться, что рендер идёт
        const bgTest = new Graphics();
        bgTest.beginFill(0x222244);
        bgTest.drawRect(0, 0, app.renderer.width, app.renderer.height);
        bgTest.endFill();
        app.stage.addChild(bgTest);

        const textures = await loadFirstDepositTextures();

        character = new Container();
        character.sortableChildren = true;
        character.x = app.renderer.width * 0.5 - CHAR_WIDTH / 2;
        character.y = app.renderer.height * 0.1;

        // Позиции и pivot как в 1st-deposit/index.styled.ts (top/left/width %, transform-origin)
        const part = (
          tex: any,
          topPct: number,
          leftPct: number,
          widthPct: number,
          pivot: "top-left" | "bottom" | "bottom-right" | "top-right" | "p15_75" | "p15_90",
          zIndex: number
        ) => {
          const s = new Sprite(tex);
          const w = (CHAR_WIDTH * widthPct) / 100;
          const scale = w / s.texture.width;
          s.scale.set(scale);
          const tw = s.width;
          const th = s.height;
          const leftPx = (CHAR_WIDTH * leftPct) / 100;
          const topPx = (CHAR_HEIGHT * topPct) / 100;
          switch (pivot) {
            case "top-left":
              s.x = leftPx;
              s.y = topPx;
              s.pivot.set(0, 0);
              break;
            case "bottom":
              s.pivot.set(tw / 2, th);
              s.x = leftPx + tw / 2;
              s.y = topPx + th;
              break;
            case "bottom-right":
              s.pivot.set(tw, th);
              s.x = leftPx + tw;
              s.y = topPx + th;
              break;
            case "top-right":
              s.pivot.set(tw, 0);
              s.x = leftPx + tw;
              s.y = topPx;
              break;
            case "p15_75":
              s.pivot.set(tw * 0.15, th * 0.75);
              s.x = leftPx + tw * 0.15;
              s.y = topPx + th * 0.75;
              break;
            case "p15_90":
              s.pivot.set(tw * 0.15, th * 0.9);
              s.x = leftPx + tw * 0.15;
              s.y = topPx + th * 0.9;
              break;
          }
          s.zIndex = zIndex;
          return s;
        };

        const body = part(textures.body, 28.91, 24.18, 58.82, "top-left", 2);
        head = part(textures.head, -10.3, 30.24, 42.35, "bottom", 3);
        leftHand = part(textures.leftHand, 15.36, 61.03, 41.33, "bottom-right", 1);
        arm = part(textures.arm, 31, 23.29, 23.42, "top-right", 1);
        hand = part(textures.hand, 32.7, 13.7, 18, "p15_75", 1);
        finger = part(textures.finger, 25.5, 4, 20.82, "p15_90", 1);

        character.addChild(body, arm, hand, finger, leftHand, head);
        app.stage.addChild(character);

        // Базовые значения (покой) — для интерполяции. В оригинале: translate(0%,0%) rotate(0deg) scale(1)
        const rest = {
          arm: { x: arm.x, y: arm.y, scale: arm.scale.x, rotation: 0, w: arm.width, h: arm.height },
          hand: { x: hand.x, y: hand.y, scale: hand.scale.x, rotation: 0, w: hand.width, h: hand.height },
          finger: { x: finger.x, y: finger.y, scale: finger.scale.x, rotation: 0, w: finger.width, h: finger.height },
          head: { x: head.x, y: head.y, scale: head.scale.x, rotation: 0 },
          leftHand: { x: leftHand.x, y: leftHand.y, scale: leftHand.scale.x, rotation: 0, w: leftHand.width, h: leftHand.height }
        };
        // Цели анимации 1:1 из 1st-deposit/index.tsx (translate % от своего размера, scale, rotate)
        const anim = {
          arm: { tx: 0.025, ty: 0.175, scale: 1.1, rotation: (25 * Math.PI) / 180 },
          hand: { tx: -0.505, ty: -0.04, scale: 1.1, rotation: (-15 * Math.PI) / 180 },
          finger: { tx: -0.8, ty: 0.1, scale: 1.2, rotation: (-20 * Math.PI) / 180 },
          head: { rotation: (-10 * Math.PI) / 180 },
          leftHand: { tx: 0, ty: -0.205, scale: 1, rotation: (-15 * Math.PI) / 180 }
        };

        const DURATION_MS = 400;
        const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
        const easeInOut = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

        let animStart = 0;
        let phase: "idle" | "toAnim" | "hold" | "toIdle" = "idle";
        const tickerFn = (ticker: { deltaMS: number }) => {
          if (!arm || !hand || !finger || !head || !leftHand) return;
          const now = performance.now();

          const applyAnim = (e: number) => {
            arm.x = lerp(rest.arm.x, rest.arm.x + anim.arm.tx * rest.arm.w, e);
            arm.y = lerp(rest.arm.y, rest.arm.y + anim.arm.ty * rest.arm.h, e);
            arm.scale.set(lerp(rest.arm.scale, rest.arm.scale * anim.arm.scale, e));
            arm.rotation = lerp(rest.arm.rotation, anim.arm.rotation, e);

            hand.x = lerp(rest.hand.x, rest.hand.x + anim.hand.tx * rest.hand.w, e);
            hand.y = lerp(rest.hand.y, rest.hand.y + anim.hand.ty * rest.hand.h, e);
            hand.scale.set(lerp(rest.hand.scale, rest.hand.scale * anim.hand.scale, e));
            hand.rotation = lerp(rest.hand.rotation, anim.hand.rotation, e);

            finger.x = lerp(rest.finger.x, rest.finger.x + anim.finger.tx * rest.finger.w, e);
            finger.y = lerp(rest.finger.y, rest.finger.y + anim.finger.ty * rest.finger.h, e);
            finger.scale.set(lerp(rest.finger.scale, rest.finger.scale * anim.finger.scale, e));
            finger.rotation = lerp(rest.finger.rotation, anim.finger.rotation, e);

            head.rotation = lerp(rest.head.rotation, anim.head.rotation, e);

            leftHand.x = lerp(rest.leftHand.x, rest.leftHand.x + anim.leftHand.tx * rest.leftHand.w, e);
            leftHand.y = lerp(rest.leftHand.y, rest.leftHand.y + anim.leftHand.ty * rest.leftHand.h, e);
            leftHand.scale.set(lerp(rest.leftHand.scale, rest.leftHand.scale * anim.leftHand.scale, e));
            leftHand.rotation = lerp(rest.leftHand.rotation, anim.leftHand.rotation, e);
          };

          const applyRest = (e: number) => {
            arm.x = lerp(rest.arm.x + anim.arm.tx * rest.arm.w, rest.arm.x, e);
            arm.y = lerp(rest.arm.y + anim.arm.ty * rest.arm.h, rest.arm.y, e);
            arm.scale.set(lerp(rest.arm.scale * anim.arm.scale, rest.arm.scale, e));
            arm.rotation = lerp(anim.arm.rotation, rest.arm.rotation, e);

            hand.x = lerp(rest.hand.x + anim.hand.tx * rest.hand.w, rest.hand.x, e);
            hand.y = lerp(rest.hand.y + anim.hand.ty * rest.hand.h, rest.hand.y, e);
            hand.scale.set(lerp(rest.hand.scale * anim.hand.scale, rest.hand.scale, e));
            hand.rotation = lerp(anim.hand.rotation, rest.hand.rotation, e);

            finger.x = lerp(rest.finger.x + anim.finger.tx * rest.finger.w, rest.finger.x, e);
            finger.y = lerp(rest.finger.y + anim.finger.ty * rest.finger.h, rest.finger.y, e);
            finger.scale.set(lerp(rest.finger.scale * anim.finger.scale, rest.finger.scale, e));
            finger.rotation = lerp(anim.finger.rotation, rest.finger.rotation, e);

            head.rotation = lerp(anim.head.rotation, rest.head.rotation, e);

            leftHand.x = lerp(rest.leftHand.x + anim.leftHand.tx * rest.leftHand.w, rest.leftHand.x, e);
            leftHand.y = lerp(rest.leftHand.y + anim.leftHand.ty * rest.leftHand.h, rest.leftHand.y, e);
            leftHand.scale.set(lerp(rest.leftHand.scale * anim.leftHand.scale, rest.leftHand.scale, e));
            leftHand.rotation = lerp(anim.leftHand.rotation, rest.leftHand.rotation, e);
          };

          if (phase === "toAnim") {
            const elapsed = now - animStart;
            const t = Math.min(1, elapsed / DURATION_MS);
            const e = easeInOut(t);
            applyAnim(e);
            if (t >= 1) {
              phase = "hold";
              animStart = now;
            }
          } else if (phase === "hold") {
            const elapsed = now - animStart;
            if (elapsed >= 1000) {
              phase = "toIdle";
              animStart = now;
            }
          } else if (phase === "toIdle") {
            const elapsed = now - animStart;
            const t = Math.min(1, elapsed / DURATION_MS);
            const e = easeInOut(t);
            applyRest(e);
            if (t >= 1) phase = "idle";
          }
        };

        app.ticker.add(tickerFn);
        removeTicker = () => app?.ticker.remove(tickerFn);

        const animate = () => {
          if (phase !== "idle" || !arm) return;
          phase = "toAnim";
          animStart = performance.now();
        };

        animate();
        intervalId = window.setInterval(animate, 3000);
      } catch (err) {
        // В dev-режиме React DevTools перехватывает console.error и показывает
        // overlay с рекомендацией добавить error boundary. Для нашего случая
        // достаточно предупредить в консоли, не помечая это как фатальную ошибку.
        console.warn("FirstDepositPixi init warning:", err);
      }
    })();

    return () => {
      destroyed = true;
      if (intervalId !== undefined) {
        clearInterval(intervalId);
      }
      removeTicker?.();
      if (app) {
        try {
          app.destroy();
        } catch (e) {
          console.warn("FirstDepositPixi destroy warning:", e);
        }
      }
    };
  }, []);

  return <div ref={canvasRef} style={{ width: "100%", height: "100%" }} />;
};

export default FirstDepositPixi;

