import React, { useEffect, useRef } from "react";
import { Application, Container, Sprite, Graphics } from "pixi.js";
import { loadGameOfMonthTextures } from "./gameOfMonthTextures";

const CHAR_WIDTH = 558;
const CHAR_HEIGHT = 860;

const GameOfMonthPixi: React.FC = () => {
  const canvasRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    let app: Application | null = null;
    let character: Container | null = null;
    let headContainer: Container | null = null;
    let eyebrows: Sprite | null = null;
    let mustacheLeft: Sprite | null = null;
    let mustacheRight: Sprite | null = null;
    let leftArm: Sprite | null = null;
    let rightHandTool: Sprite | null = null;
    let plate: Sprite | null = null;
    let food: Sprite | null = null;
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

        const textures = await loadGameOfMonthTextures();

        character = new Container();
        character.sortableChildren = true;
        character.x = app.renderer.width * 0.5 - CHAR_WIDTH / 2;
        character.y = app.renderer.height * 0.05;

        // Позиции 1:1 из game-of-month/index.styled.ts: top/left/width в % от Character 558x860.
        // CSS position:absolute — верхний левый угол в (leftPct%, topPct%). transform-origin по умолчанию center.
        const part = (
          tex: any,
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

        // HeaderContainer: top 0, left 0, width 100%, height 100%, transform-origin center
        headContainer = new Container();
        headContainer.sortableChildren = true;
        headContainer.pivot.set(CHAR_WIDTH / 2, CHAR_HEIGHT / 2);
        headContainer.x = CHAR_WIDTH / 2;
        headContainer.y = CHAR_HEIGHT / 2;
        headContainer.zIndex = 3;
        const head = part(textures.head, 10.6, 50, 35.5, 2);
        eyebrows = part(textures.eyebrows, 29.8, 61, 20, 4);
        const nose = part(textures.nose, 36.05, 67.6, 10.4, 4);
        mustacheLeft = part(textures.mustache_left, 39.1, 61, 11, 3);
        mustacheRight = part(textures.mustache_right, 39.5, 74, 13, 3);
        headContainer.addChild(head, eyebrows, nose, mustacheLeft, mustacheRight);

        const body = part(textures.body, 20.6, 36.5, 53.5, 1);
        leftArm = part(textures.left_arm, 44, 38.5, 14, 0);
        rightHandTool = part(textures.right_hand_tool, 38.5, 55.2, 40, 2);
        plate = part(textures.plate_empty, 41, 8, 41, 1);
        food = part(textures.food, 41.5, 9, 32, 2);
        const game = part(textures.game, 70.5, 79, 38, 2);

        character.addChild(leftArm, body, plate, rightHandTool, food, game, headContainer);
        app.stage.addChild(character);

        const rest = {
          headContainer: { x: CHAR_WIDTH / 2, y: CHAR_HEIGHT / 2, rotation: 0 },
          eyebrows: { x: eyebrows.x, y: eyebrows.y, rotation: 0, w: eyebrows.width, h: eyebrows.height },
          mustacheLeft: { x: mustacheLeft.x, y: mustacheLeft.y, rotation: 0, w: mustacheLeft.width, h: mustacheLeft.height },
          mustacheRight: { x: mustacheRight.x, y: mustacheRight.y, rotation: 0, w: mustacheRight.width, h: mustacheRight.height },
          leftArm: { x: leftArm.x, y: leftArm.y, rotation: 0, w: leftArm.width, h: leftArm.height },
          rightHandTool: { x: rightHandTool.x, y: rightHandTool.y, rotation: 0, w: rightHandTool.width, h: rightHandTool.height },
          plate: { x: plate.x, y: plate.y, w: plate.width, h: plate.height },
          food: { x: food.x, y: food.y, scale: food.scale.x, w: food.width, h: food.height }
        };

        const anim = {
          headContainer: { x: CHAR_WIDTH * 0, y: CHAR_HEIGHT * 0.05, rotation: (-15 * Math.PI) / 180 },
          eyebrows: { ty: -0.3 },
          mustacheLeft: { tx: 0.05, ty: -0.05, rotation: (10 * Math.PI) / 180 },
          mustacheRight: { tx: -0.05, ty: -0.05, rotation: (-15 * Math.PI) / 180 },
          leftArm: { tx: -0.1, ty: -0.1, rotation: (15 * Math.PI) / 180 },
          rightHandTool: { tx: 0.05, ty: -0.1, rotation: (15 * Math.PI) / 180 },
          plate: { ty: -0.15 },
          foodPhase1: { ty: -0.26 },
          foodPhase2: { ty: -0.75, scale: 1.2 }
        };

        const DURATION_MS = 600;
        const FOOD_PHASE1_MS = 200;
        const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
        const easeInOut = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

        let animStart = 0;
        let phase: "idle" | "toAnim" | "hold" | "toIdle" = "idle";
        const tickerFn = () => {
          if (!headContainer || !eyebrows || !mustacheLeft || !mustacheRight || !leftArm || !rightHandTool || !plate || !food) return;
          const now = performance.now();
          const elapsed = now - animStart;

          if (phase === "toAnim") {
            const t = Math.min(1, elapsed / DURATION_MS);
            const e = easeInOut(t);
            headContainer.x = lerp(rest.headContainer.x, rest.headContainer.x + anim.headContainer.x, e);
            headContainer.y = lerp(rest.headContainer.y, rest.headContainer.y + anim.headContainer.y, e);
            headContainer.rotation = lerp(rest.headContainer.rotation, anim.headContainer.rotation, e);

            eyebrows.y = lerp(rest.eyebrows.y, rest.eyebrows.y + anim.eyebrows.ty * rest.eyebrows.h, e);

            mustacheLeft.x = lerp(rest.mustacheLeft.x, rest.mustacheLeft.x + anim.mustacheLeft.tx * rest.mustacheLeft.w, e);
            mustacheLeft.y = lerp(rest.mustacheLeft.y, rest.mustacheLeft.y + anim.mustacheLeft.ty * rest.mustacheLeft.h, e);
            mustacheLeft.rotation = lerp(rest.mustacheLeft.rotation, anim.mustacheLeft.rotation, e);

            mustacheRight.x = lerp(rest.mustacheRight.x, rest.mustacheRight.x + anim.mustacheRight.tx * rest.mustacheRight.w, e);
            mustacheRight.y = lerp(rest.mustacheRight.y, rest.mustacheRight.y + anim.mustacheRight.ty * rest.mustacheRight.h, e);
            mustacheRight.rotation = lerp(rest.mustacheRight.rotation, anim.mustacheRight.rotation, e);

            leftArm.x = lerp(rest.leftArm.x, rest.leftArm.x + anim.leftArm.tx * rest.leftArm.w, e);
            leftArm.y = lerp(rest.leftArm.y, rest.leftArm.y + anim.leftArm.ty * rest.leftArm.h, e);
            leftArm.rotation = lerp(rest.leftArm.rotation, anim.leftArm.rotation, e);

            rightHandTool.x = lerp(rest.rightHandTool.x, rest.rightHandTool.x + anim.rightHandTool.tx * rest.rightHandTool.w, e);
            rightHandTool.y = lerp(rest.rightHandTool.y, rest.rightHandTool.y + anim.rightHandTool.ty * rest.rightHandTool.h, e);
            rightHandTool.rotation = lerp(rest.rightHandTool.rotation, anim.rightHandTool.rotation, e);

            plate.y = lerp(rest.plate.y, rest.plate.y + anim.plate.ty * rest.plate.h, e);

            const foodT = elapsed < FOOD_PHASE1_MS ? elapsed / FOOD_PHASE1_MS : 1;
            const foodT2 = elapsed < FOOD_PHASE1_MS ? 0 : easeInOut(Math.min(1, (elapsed - FOOD_PHASE1_MS) / (DURATION_MS - FOOD_PHASE1_MS)));
            food.y = elapsed < FOOD_PHASE1_MS
              ? lerp(rest.food.y, rest.food.y + anim.foodPhase1.ty * rest.food.h, foodT)
              : lerp(rest.food.y + anim.foodPhase1.ty * rest.food.h, rest.food.y + anim.foodPhase2.ty * rest.food.h, foodT2);
            food.scale.set(elapsed < FOOD_PHASE1_MS ? rest.food.scale : lerp(rest.food.scale, rest.food.scale * anim.foodPhase2.scale, foodT2));

            if (t >= 1) {
              phase = "hold";
              animStart = now;
            }
          } else if (phase === "hold") {
            if (elapsed >= 2200) {
              phase = "toIdle";
              animStart = now;
            }
          } else if (phase === "toIdle") {
            const t = Math.min(1, elapsed / 400);
            const e = easeInOut(t);
            headContainer.x = lerp(rest.headContainer.x + anim.headContainer.x, rest.headContainer.x, e);
            headContainer.y = lerp(rest.headContainer.y + anim.headContainer.y, rest.headContainer.y, e);
            headContainer.rotation = lerp(anim.headContainer.rotation, rest.headContainer.rotation, e);

            eyebrows.y = lerp(rest.eyebrows.y + anim.eyebrows.ty * rest.eyebrows.h, rest.eyebrows.y, e);
            mustacheLeft.x = lerp(rest.mustacheLeft.x + anim.mustacheLeft.tx * rest.mustacheLeft.w, rest.mustacheLeft.x, e);
            mustacheLeft.y = lerp(rest.mustacheLeft.y + anim.mustacheLeft.ty * rest.mustacheLeft.h, rest.mustacheLeft.y, e);
            mustacheLeft.rotation = lerp(anim.mustacheLeft.rotation, rest.mustacheLeft.rotation, e);
            mustacheRight.x = lerp(rest.mustacheRight.x + anim.mustacheRight.tx * rest.mustacheRight.w, rest.mustacheRight.x, e);
            mustacheRight.y = lerp(rest.mustacheRight.y + anim.mustacheRight.ty * rest.mustacheRight.h, rest.mustacheRight.y, e);
            mustacheRight.rotation = lerp(anim.mustacheRight.rotation, rest.mustacheRight.rotation, e);
            leftArm.x = lerp(rest.leftArm.x + anim.leftArm.tx * rest.leftArm.w, rest.leftArm.x, e);
            leftArm.y = lerp(rest.leftArm.y + anim.leftArm.ty * rest.leftArm.h, rest.leftArm.y, e);
            leftArm.rotation = lerp(anim.leftArm.rotation, rest.leftArm.rotation, e);
            rightHandTool.x = lerp(rest.rightHandTool.x + anim.rightHandTool.tx * rest.rightHandTool.w, rest.rightHandTool.x, e);
            rightHandTool.y = lerp(rest.rightHandTool.y + anim.rightHandTool.ty * rest.rightHandTool.h, rest.rightHandTool.y, e);
            rightHandTool.rotation = lerp(anim.rightHandTool.rotation, rest.rightHandTool.rotation, e);
            plate.y = lerp(rest.plate.y + anim.plate.ty * rest.plate.h, rest.plate.y, e);
            food.y = lerp(rest.food.y + anim.foodPhase2.ty * rest.food.h, rest.food.y, e);
            food.scale.set(lerp(rest.food.scale * anim.foodPhase2.scale, rest.food.scale, e));
            if (t >= 1) phase = "idle";
          }
        };

        app.ticker.add(tickerFn);
        removeTicker = () => app?.ticker.remove(tickerFn);

        const animate = () => {
          if (phase !== "idle") return;
          phase = "toAnim";
          animStart = performance.now();
        };

        animate();
        intervalId = window.setInterval(animate, 2800);
      } catch (err) {
        console.warn("GameOfMonthPixi init warning:", err);
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
          console.warn("GameOfMonthPixi destroy warning:", e);
        }
      }
    };
  }, []);

  return <div ref={canvasRef} style={{ width: "100%", height: "100%" }} />;
};

export default GameOfMonthPixi;
