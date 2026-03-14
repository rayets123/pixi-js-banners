import React, { useEffect, useRef } from "react";
import { Application, Container, Sprite, Graphics, Texture } from "pixi.js";
import { loadLoyaltyTextures } from "./loyaltyTextures";

const CHAR_WIDTH = 900;
const CHAR_HEIGHT = 507;

const LoyaltyPixi: React.FC = () => {
  const canvasRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    let app: Application | null = null;
    let character: Container | null = null;
    let headContainer: Container | null = null;
    let leftArm: Sprite | null = null;
    let leftForearm: Sprite | null = null;
    let leftHand: Sprite | null = null;
    let leftFingersOpen: Sprite | null = null;
    let leftFingersClosed: Sprite | null = null;
    let leftThumbOpen: Sprite | null = null;
    let leftThumbClosed: Sprite | null = null;
    let coinSplashStart: Sprite | null = null;
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

        const bgTest = new Graphics();
        bgTest.beginFill(0x222244);
        bgTest.drawRect(0, 0, app.renderer.width, app.renderer.height);
        bgTest.endFill();
        app.stage.addChild(bgTest);

        const textures = await loadLoyaltyTextures();

        character = new Container();
        character.sortableChildren = true;
        character.x = app.renderer.width * 0.5 - CHAR_WIDTH / 2;
        character.y = app.renderer.height - CHAR_HEIGHT - 40;

        const part = (
          tex: Texture,
          topPct: number,
          leftPct: number,
          widthPct: number,
          zIndex: number
        ) => {
          const s = new Sprite(tex);
          const targetW = (CHAR_WIDTH * widthPct) / 100;
          const scale = targetW / s.texture.width;
          s.scale.set(scale);
          const tw = s.width;
          const th = s.height;
          const leftPx = (CHAR_WIDTH * leftPct) / 100;
          const topPx = (CHAR_HEIGHT * topPct) / 100;
          s.pivot.set(tw / 2, th / 2);
          s.x = leftPx + tw / 2;
          s.y = topPx + th / 2;
          s.zIndex = zIndex;
          return s;
        };

        const partBottom = (
          tex: Texture,
          bottomPct: number,
          leftPct: number,
          widthPct: number,
          zIndex: number
        ) => {
          const s = new Sprite(tex);
          const targetW = (CHAR_WIDTH * widthPct) / 100;
          const scale = targetW / s.texture.width;
          s.scale.set(scale);
          const tw = s.width;
          const th = s.height;
          const leftPx = (CHAR_WIDTH * leftPct) / 100;
          const y = CHAR_HEIGHT * (1 + bottomPct / 100);
          s.pivot.set(tw / 2, th);
          s.x = leftPx + tw / 2;
          s.y = y;
          s.zIndex = zIndex;
          return s;
        };

        headContainer = new Container();
        headContainer.sortableChildren = true;
        headContainer.pivot.set(CHAR_WIDTH / 2, CHAR_HEIGHT / 2);
        headContainer.x = CHAR_WIDTH / 2;
        headContainer.y = CHAR_HEIGHT / 2;
        headContainer.zIndex = 7;

        const hat = part(textures.hat, 2.4, 43.86, 15.8, 5);
        const hatBottom = part(textures.hat_bottom, 14.5, 47.2, 12.4, 4);
        const face = part(textures.face, 11.47, 43.77, 21.43, 4);
        const mustache = part(textures.mustache, 34.13, 47.3, 22.73, 2);
        const mustacheLeft = part(textures.mustache_left, 34.2, 47.22, 12.63, 4);
        const mustacheRight = part(textures.mustache_right, 28.03, 60.62, 6.63, 4);
        const beard = part(textures.beard, 15.91, 50.96, 11.3, 4);
        const eyes = part(textures.eyes, 25.6, 53.4, 7.43, 5);
        const nose = part(textures.nose, 29.1, 56.1, 7.5, 6);
        const mouth = part(textures.mouth, 31.8, 53.9, 10.2, 3);
        headContainer.addChild(hat, hatBottom, face, mustache, mustacheLeft, mustacheRight, beard, eyes, nose, mouth);

        const body = part(textures.body, 42.95, 45.67, 32.65, 1);
        const coinsPot = partBottom(textures.coins_pot, 4.5, 65.1, 29.41, 7);
        const rightSleeve = part(textures.right_sleeve, 54.2, 35.6, 18.5, 2);
        const rightFingerOpen = part(textures.right_finger_open, 39.9, 26.6, 9, 4);
        const rightHandFull = part(textures.right_hand_full, 44.3, 28.5, 12.8, 3);
        const rightFingerClosed = part(textures.right_finger_closed, 43.28, 31.4, 5.65, 4);
        rightFingerClosed.alpha = 0;

        leftArm = part(textures.left_arm, 45.3, 64.1, 16.2, 0);
        leftForearm = part(textures.left_forearm, 43.8, 73.5, 11.2, 2);
        leftHand = part(textures.left_hand, 38.54, 72.22, 12.45, 4);
        leftFingersOpen = part(textures.left_fingers_open, 34.8, 73.2, 12.8, 7);
        leftFingersClosed = part(textures.left_fingers_closed, 35.5, 72.9, 11.8, 7);
        leftThumbOpen = part(textures.left_thumb_open, 37.5, 70.6, 4.8, 3);
        leftThumbClosed = part(textures.left_thumb_closed, 45, 72, 5.2, 2);

        coinSplashStart = part(textures.coin_splash_start, 56.47, 75.24, 8.51, 5);
        coinSplashStart.alpha = 0;
        const coinSplash1 = part(textures.coin_splash_1, 35, 78.35, 2.2, 6);
        coinSplash1.alpha = 0;
        const coinSplash2 = part(textures.coin_splash_2, 35, 73.35, 2.2, 6);
        coinSplash2.alpha = 0;
        const coinSplash3 = part(textures.coin_splash_1, 35, 78.35, 2.2, 6);
        coinSplash3.alpha = 0;
        const coinSplash4 = part(textures.coin_splash_2, 35, 80.35, 2.2, 6);
        coinSplash4.alpha = 0;
        const coinSplash5 = part(textures.coin_splash_1, 35, 75, 2.2, 6);
        coinSplash5.alpha = 0;
        const coinSplash6 = part(textures.coin_splash_2, 35, 79, 2.2, 6);
        coinSplash6.alpha = 0;

        character.addChild(
          body,
          leftArm,
          leftForearm,
          leftHand,
          leftFingersOpen,
          leftFingersClosed,
          leftThumbOpen,
          leftThumbClosed,
          rightSleeve,
          rightFingerOpen,
          rightHandFull,
          rightFingerClosed,
          coinsPot,
          coinSplashStart,
          coinSplash1,
          coinSplash2,
          coinSplash3,
          coinSplash4,
          coinSplash5,
          coinSplash6,
          headContainer
        );
        app.stage.addChild(character);

        const rest = {
          leftArm: { y: leftArm.y, rotation: 0, h: leftArm.height },
          leftForearm: { y: leftForearm.y, rotation: 0, h: leftForearm.height },
          leftHand: { y: leftHand.y, h: leftHand.height },
          leftFingersOpen: { y: leftFingersOpen.y },
          leftFingersClosed: { y: leftFingersClosed.y },
          leftThumbOpen: { y: leftThumbOpen.y},
          leftThumbClosed: { y: leftThumbClosed.y },
          eyes: { x: eyes.x, y: eyes.y }
        };
        const EYES_DOWN_OFFSET = eyes.height * 0.3;
        const EYES_RIGHT_OFFSET = eyes.width * 0.2; // в сторону coins pot
        const EYES_DOWN_START_MS = 200;
        const EYES_DOWN_DURATION_MS = 250;
        const EYES_UP_START_MS = 1100;
        const EYES_UP_DURATION_MS = 300;
        const coinRestY = [coinSplash1.y, coinSplash2.y, coinSplash3.y, coinSplash4.y, coinSplash5.y, coinSplash6.y];
        const coinTranslatePct = [9.6, 7.4, 9.8, 7.5, 9.5, 7]; // fall distance = N * height (down)
        const coinHeights = [coinSplash1.height, coinSplash2.height, coinSplash3.height, coinSplash4.height, coinSplash5.height, coinSplash6.height];
        const coinEndY = coinRestY.map((y, i) => y + coinTranslatePct[i] * coinHeights[i]);
        const coinAppearMs = [900, 900, 1000, 1000, 1100, 1100];
        const COIN_FALL_MS = 450;

        const ANIM_MS = 2000;
        const RETURN_MS = 400;
        const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
        const easeInOut = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

        let animStart = 0;
        let returnStart = 0;
        let phase: "idle" | "anim" | "return" = "idle";
        const tickerFn = () => {
          if (!leftArm || !leftForearm || !leftHand || !leftFingersOpen || !leftFingersClosed || !leftThumbOpen || !leftThumbClosed || !coinSplashStart) return;
          const now = performance.now();
          const elapsed = now - animStart;

          if (phase === "return") {
            const elapsedReturn = now - returnStart;
            if (elapsedReturn >= RETURN_MS) {
              phase = "idle";
              leftArm.y = rest.leftArm.y;
              leftArm.rotation = 0;
              leftForearm.y = rest.leftForearm.y;
              leftForearm.rotation = 0;
              leftHand.y = rest.leftHand.y;
              leftFingersOpen.y = rest.leftFingersOpen.y;
              leftFingersClosed.y = rest.leftFingersClosed.y;
              leftThumbOpen.y = rest.leftThumbOpen.y;
              leftThumbClosed.y = rest.leftThumbClosed.y;
              eyes.x = rest.eyes.x;
              eyes.y = rest.eyes.y;
              return;
            }
            const t = easeInOut(Math.min(1, elapsedReturn / RETURN_MS));
            const armYFrom = rest.leftArm.y - 0.15 * rest.leftArm.h;
            const armRotFrom = (-10 * Math.PI) / 180;
            const forearmYFrom = rest.leftForearm.y - 0.3 * rest.leftForearm.h;
            const forearmRotFrom = (6 * Math.PI) / 180;
            const handYFrom = rest.leftHand.y - 0.6 * rest.leftHand.h;
            const fingersYFrom = rest.leftFingersOpen.y - 0.6 * rest.leftHand.h;
            // старт из позиции "рука вверху" (где был visible leftThumbClosed), без подпрыгивания
            const thumbYFrom = rest.leftThumbClosed.y - 1.06 * rest.leftHand.h;
            leftArm.y = lerp(armYFrom, rest.leftArm.y, t);
            leftArm.rotation = lerp(armRotFrom, 0, t);
            leftForearm.y = lerp(forearmYFrom, rest.leftForearm.y, t);
            leftForearm.rotation = lerp(forearmRotFrom, 0, t);
            leftHand.y = lerp(handYFrom, rest.leftHand.y, t);
            leftFingersOpen.y = lerp(fingersYFrom, rest.leftFingersOpen.y, t);
            leftFingersClosed.y = lerp(fingersYFrom, rest.leftFingersClosed.y, t);
            leftThumbOpen.y = lerp(thumbYFrom, rest.leftThumbOpen.y, t);
            leftThumbClosed.y = lerp(thumbYFrom, rest.leftThumbClosed.y, t);
            return;
          }

          if (phase === "anim") {
            if (elapsed >= ANIM_MS) {
              phase = "return";
              returnStart = now;
              leftFingersOpen.alpha = 1;
              leftFingersClosed.alpha = 0;
              leftThumbOpen.alpha = 1;
              leftThumbClosed.alpha = 0;
              rightFingerOpen.alpha = 1;
              rightFingerClosed.alpha = 0;
              coinSplashStart.alpha = 0;
              const coins = [coinSplash1, coinSplash2, coinSplash3, coinSplash4, coinSplash5, coinSplash6];
              coins.forEach((c, i) => {
                c.alpha = 0;
                c.y = coinRestY[i];
              });
              return;
            }
            if (elapsed < 100) {
              const e1 = easeInOut(Math.min(1, elapsed / 100));
              leftArm.y = lerp(rest.leftArm.y, rest.leftArm.y + 0.25 * rest.leftArm.h, e1);
              leftArm.rotation = lerp(0, (10 * Math.PI) / 180, e1);
              leftForearm.y = lerp(rest.leftForearm.y, rest.leftForearm.y + 0.4 * rest.leftForearm.h, e1);
              leftForearm.rotation = lerp(0, (-6 * Math.PI) / 180, e1);
              leftHand.y = lerp(rest.leftHand.y, rest.leftHand.y + 1 * rest.leftHand.h, e1);
              leftFingersOpen.y = lerp(rest.leftFingersOpen.y, rest.leftFingersOpen.y + 1 * rest.leftHand.h, e1);
              leftFingersClosed.y = lerp(rest.leftFingersClosed.y, rest.leftFingersClosed.y + 1 * rest.leftHand.h, e1);
              leftThumbOpen.y = lerp(rest.leftThumbOpen.y, rest.leftThumbOpen.y + 1.7 * rest.leftHand.h, e1);
              leftThumbClosed.y = lerp(rest.leftThumbClosed.y, rest.leftThumbClosed.y + 1.7 * rest.leftHand.h, e1);
            } else if (elapsed < 400) {
              if (elapsed >= 200) {
                leftFingersOpen.alpha = 0;
                leftFingersClosed.alpha = 1;
                leftThumbOpen.alpha = 0;
                leftThumbClosed.alpha = 1;
                rightFingerOpen.alpha = 0;
                rightFingerClosed.alpha = 1;
                coinSplashStart.alpha = 1;
              }
              const e2 = easeInOut(Math.min(1, (elapsed - 100) / 300));
              leftArm.y = lerp(rest.leftArm.y + 0.25 * rest.leftArm.h, rest.leftArm.y - 0.15 * rest.leftArm.h, e2);
              leftArm.rotation = lerp((10 * Math.PI) / 180, (-10 * Math.PI) / 180, e2);
              leftForearm.y = lerp(rest.leftForearm.y + 0.4 * rest.leftForearm.h, rest.leftForearm.y - 0.3 * rest.leftForearm.h, e2);
              leftForearm.rotation = lerp((-6 * Math.PI) / 180, (6 * Math.PI) / 180, e2);
              leftHand.y = lerp(rest.leftHand.y + 1 * rest.leftHand.h, rest.leftHand.y - 0.6 * rest.leftHand.h, e2);
              leftFingersOpen.y = lerp(rest.leftFingersOpen.y + 1 * rest.leftHand.h, rest.leftFingersOpen.y - 0.6 * rest.leftHand.h, e2);
              leftFingersClosed.y = lerp(rest.leftFingersClosed.y + 1 * rest.leftHand.h, rest.leftFingersClosed.y - 0.6 * rest.leftHand.h, e2);
              leftThumbOpen.y = lerp(rest.leftThumbOpen.y + 1.7 * rest.leftHand.h, rest.leftThumbOpen.y - .6 * rest.leftHand.h, e2);
              leftThumbClosed.y = lerp(rest.leftThumbClosed.y + 1.7 * rest.leftHand.h, rest.leftThumbClosed.y - 1 * rest.leftHand.h, e2);
              if (e2 >= 1) coinSplashStart.alpha = 0;
            } else {
              leftArm.y = rest.leftArm.y - 0.15 * rest.leftArm.h;
              leftArm.rotation = (-10 * Math.PI) / 180;
              leftForearm.y = rest.leftForearm.y - 0.3 * rest.leftForearm.h;
              leftForearm.rotation = (6 * Math.PI) / 180;
              leftHand.y = rest.leftHand.y - 0.6 * rest.leftHand.h;
              leftFingersOpen.alpha = 0;
              leftFingersClosed.alpha = 1;
              leftThumbOpen.alpha = 0;
              leftThumbClosed.alpha = 1;
              coinSplashStart.alpha = 0;
              if (elapsed >= 900) {
                leftFingersClosed.alpha = 0;
                leftFingersOpen.alpha = 1;
                leftThumbClosed.alpha = 0;
                leftThumbOpen.alpha = 1;
                rightFingerClosed.alpha = 0;
                rightFingerOpen.alpha = 1;
                coinSplash1.alpha = 1;
                coinSplash2.alpha = 1;
              }
              if (elapsed >= 1000) {
                coinSplash3.alpha = 1;
                coinSplash4.alpha = 1;
              }
              if (elapsed >= 1100) {
                coinSplash5.alpha = 1;
                coinSplash6.alpha = 1;
              }
              const coins = [coinSplash1, coinSplash2, coinSplash3, coinSplash4, coinSplash5, coinSplash6];
              coins.forEach((coin, i) => {
                if (coin.alpha < 1) return;
                const fallElapsed = elapsed - coinAppearMs[i];
                if (fallElapsed <= 0) {
                  coin.y = coinRestY[i];
                } else if (fallElapsed < COIN_FALL_MS) {
                  const t = easeInOut(fallElapsed / COIN_FALL_MS);
                  coin.y = lerp(coinRestY[i], coinEndY[i], t);
                } else {
                  coin.y = coinEndY[i];
                }
              });
            }
            // eyes: look down и чуть вправо (на coins pot), потом обратно
            if (elapsed < EYES_DOWN_START_MS) {
              eyes.x = rest.eyes.x;
              eyes.y = rest.eyes.y;
            } else if (elapsed < EYES_DOWN_START_MS + EYES_DOWN_DURATION_MS) {
              const te = easeInOut((elapsed - EYES_DOWN_START_MS) / EYES_DOWN_DURATION_MS);
              eyes.x = lerp(rest.eyes.x, rest.eyes.x + EYES_RIGHT_OFFSET, te);
              eyes.y = lerp(rest.eyes.y, rest.eyes.y + EYES_DOWN_OFFSET, te);
            } else if (elapsed < EYES_UP_START_MS) {
              eyes.x = rest.eyes.x + EYES_RIGHT_OFFSET;
              eyes.y = rest.eyes.y + EYES_DOWN_OFFSET;
            } else if (elapsed < EYES_UP_START_MS + EYES_UP_DURATION_MS) {
              const te = easeInOut((elapsed - EYES_UP_START_MS) / EYES_UP_DURATION_MS);
              eyes.x = lerp(rest.eyes.x + EYES_RIGHT_OFFSET, rest.eyes.x, te);
              eyes.y = lerp(rest.eyes.y + EYES_DOWN_OFFSET, rest.eyes.y, te);
            } else {
              eyes.x = rest.eyes.x;
              eyes.y = rest.eyes.y;
            }
          }
        };

        app.ticker.add(tickerFn);
        removeTicker = () => app?.ticker.remove(tickerFn);

        const animate = () => {
          if (phase !== "idle") return;
          phase = "anim";
          animStart = performance.now();
        };

        animate();
        intervalId = window.setInterval(animate, 3000);
      } catch (err) {
        console.warn("LoyaltyPixi init warning:", err);
      }
    })();

    return () => {
      destroyed = true;
      if (intervalId !== undefined) clearInterval(intervalId);
      removeTicker?.();
      if (app) {
        try {
          app.destroy();
        } catch (e) {
          console.warn("LoyaltyPixi destroy warning:", e);
        }
      }
    };
  }, []);

  return <div ref={canvasRef} style={{ width: "100%", height: "100%" }} />;
};

export default LoyaltyPixi;
