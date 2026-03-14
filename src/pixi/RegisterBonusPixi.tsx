import React, { useEffect, useRef } from "react";
import { Application, Container, Sprite, Graphics, Texture } from "pixi.js";
import { loadRegisterBonusTextures } from "./registerBonusTextures";

const CHAR_WIDTH = 558;
const CHAR_HEIGHT = 860;

const RegisterBonusPixi: React.FC = () => {
  const canvasRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    let app: Application | null = null;
    let character: Container | null = null;
    let headContainer: Container | null = null;
    let leftHand: Sprite | null = null;
    let leftForearm: Sprite | null = null;
    let rightArm: Sprite | null = null;
    let rightForearm: Sprite | null = null;
    let rightHand: Sprite | null = null;
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

        const textures = await loadRegisterBonusTextures();

        character = new Container();
        character.sortableChildren = true;
        character.x = app.renderer.width * 0.5 - CHAR_WIDTH / 2;
        character.y = app.renderer.height * 0.05;

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

        headContainer = new Container();
        headContainer.sortableChildren = true;
        headContainer.pivot.set(CHAR_WIDTH / 2, CHAR_HEIGHT / 2);
        headContainer.x = CHAR_WIDTH / 2;
        headContainer.y = CHAR_HEIGHT / 2;
        headContainer.zIndex = 3;

        const hatTop = part(textures.hat_top, 2.4, 26.6, 25.5, 6);
        const hatBottom = part(textures.hat_bottom, 8.8, 31.2, 20.7, 4);
        const head = part(textures.head, 3.5, 25.5, 38.5, 5);
        const eyes = part(textures.eyes, 18.2, 41.4, 14.7, 5);
        const noseMustache = part(textures.nose_mustache, 19.3, 31.2, 33.6, 5);
        headContainer.addChild(hatTop, hatBottom, head, eyes, noseMustache);

        const body = part(textures.body, 28, 17.5, 63.5, 2);
        // смещение рук и чипов вправо и вниз пропорционально body (% от 558x860)
        const SHIFT_RIGHT_PCT = 7.5;
        const SHIFT_DOWN_PCT = 6.5;
        leftForearm = part(textures.left_forearm, 41.2 + SHIFT_DOWN_PCT, 67.5 + SHIFT_RIGHT_PCT, 19.8, 3);
        leftHand = part(textures.left_hand, 31.5 + SHIFT_DOWN_PCT, 67.8 + SHIFT_RIGHT_PCT, 27, 4);
        rightArm = part(textures.right_arm, 34.1 + SHIFT_DOWN_PCT, 16.4 + SHIFT_RIGHT_PCT, 15.9, 1);
        rightForearm = part(textures.right_forearm, 42.1 + SHIFT_DOWN_PCT, 5.2 + SHIFT_RIGHT_PCT, 20.8, 2);
        rightHand = part(textures.right_hand, 31.5 + SHIFT_DOWN_PCT, -7.5 + SHIFT_RIGHT_PCT, 24.1, 3);

        const chipLeft0 = part(textures.chip_left_0, 27.5 + SHIFT_DOWN_PCT, 65.2 + SHIFT_RIGHT_PCT, 9, 3);
        const chipLeft1 = part(textures.chip_left_1, 36.9 + SHIFT_DOWN_PCT, 64.6 + SHIFT_RIGHT_PCT, 9, 3);
        const chipLeft2 = part(textures.chip_left_2, 19.6 + SHIFT_DOWN_PCT, 74.2 + SHIFT_RIGHT_PCT, 9.7, 3);
        const chipLeft3 = part(textures.chip_left_3, 30 + SHIFT_DOWN_PCT, 82 + SHIFT_RIGHT_PCT, 9, 2);
        const chipLeft4 = part(textures.chip_left_4, 27.2 + SHIFT_DOWN_PCT, 73.6 + SHIFT_RIGHT_PCT, 10, 2);
        const chipLeftSingle0 = part(textures.chip_left_single, 19.1 + SHIFT_DOWN_PCT, 74 + SHIFT_RIGHT_PCT, 9.5, 2);
        const chipLeftSingle1 = part(textures.chip_left_single, 18.6 + SHIFT_DOWN_PCT, 74 + SHIFT_RIGHT_PCT, 9.5, 1);
        const chipLeftSingle2 = part(textures.chip_left_single, 29.4 + SHIFT_DOWN_PCT, 82 + SHIFT_RIGHT_PCT, 9, 0);

        const chipRight0 = part(textures.chip_right_0, 23.6 + SHIFT_DOWN_PCT, 4.3 + SHIFT_RIGHT_PCT, 9, 5);
        const chipRight1 = part(textures.chip_right_1, 25 + SHIFT_DOWN_PCT, 13 + SHIFT_RIGHT_PCT, 9, 2);
        const chipRight3 = part(textures.chip_right_3, 23.6 + SHIFT_DOWN_PCT, -3 + SHIFT_RIGHT_PCT, 9, 4);
        const chipRight4 = part(textures.chip_right_4, 32.9 + SHIFT_DOWN_PCT, 13.2 + SHIFT_RIGHT_PCT, 9, 2);
        const chipRight5 = part(textures.chip_right_5, 37.5 + SHIFT_DOWN_PCT, 13.2 + SHIFT_RIGHT_PCT, 8, 2);
        const chipRight6 = part(textures.chip_right_6, 31.8 + SHIFT_DOWN_PCT, 4.4 + SHIFT_RIGHT_PCT, 9, 1);
        const chipRightSingle = part(textures.chip_right_single, 22.8 + SHIFT_DOWN_PCT, 3.8 + SHIFT_RIGHT_PCT, 9, 0);

        character.addChild(
          body,
          rightArm,
          rightForearm,
          rightHand,
          leftForearm,
          leftHand,
          chipLeft0,
          chipLeft1,
          chipLeft2,
          chipLeft3,
          chipLeft4,
          chipLeftSingle0,
          chipLeftSingle1,
          chipLeftSingle2,
          chipRight0,
          chipRight1,
          chipRight3,
          chipRight4,
          chipRight5,
          chipRight6,
          chipRightSingle,
          headContainer
        );
        app.stage.addChild(character);

        const rest = {
          leftHand: { x: leftHand.x, y: leftHand.y, rotation: 0, h: leftHand.height, w: leftHand.width },
          leftForearm: { x: leftForearm.x, y: leftForearm.y, rotation: 0, h: leftForearm.height, w: leftForearm.width },
          rightArm: { x: rightArm.x, y: rightArm.y, rotation: 0, h: rightArm.height, w: rightArm.width },
          rightForearm: { x: rightForearm.x, y: rightForearm.y, rotation: 0, h: rightForearm.height, w: rightForearm.width },
          rightHand: { x: rightHand.x, y: rightHand.y, rotation: 0, h: rightHand.height, w: rightHand.width }
        };

        const chipsLeft = [chipLeft0, chipLeft1, chipLeft2, chipLeft3, chipLeft4];
        const chipsLeftSingle = [chipLeftSingle0, chipLeftSingle1, chipLeftSingle2];
        const chipsRight = [chipRight0, chipRight1, chipRight3, chipRight4, chipRight5, chipRight6];
        const chipsRightSingle = [chipRightSingle];

        const chipRest = (s: Sprite, topPct: number, leftPct: number, wPct: number) => {
          const scale = (CHAR_WIDTH * wPct) / 100 / s.texture.width;
          const tw = s.texture.width * scale;
          const th = s.texture.height * scale;
          return { x: (CHAR_WIDTH * (leftPct + SHIFT_RIGHT_PCT)) / 100 + tw / 2, y: (CHAR_HEIGHT * (topPct + SHIFT_DOWN_PCT)) / 100 + th / 2, scale };
        };
        const restChipsLeft = [
          chipRest(chipLeft0, 27.5, 65.2, 9),
          chipRest(chipLeft1, 36.9, 64.6, 9),
          chipRest(chipLeft2, 19.6, 74.2, 9.7),
          chipRest(chipLeft3, 30, 82, 9),
          chipRest(chipLeft4, 27.2, 73.6, 10)
        ];
        const restChipsLeftSingle = [
          chipRest(chipLeftSingle0, 19.1, 74, 9.5),
          chipRest(chipLeftSingle1, 18.6, 74, 9.5),
          chipRest(chipLeftSingle2, 29.4, 82, 9)
        ];
        const restChipsRight = [
          chipRest(chipRight0, 23.6, 4.3, 9),
          chipRest(chipRight1, 25, 13, 9),
          chipRest(chipRight3, 23.6, -3, 9),
          chipRest(chipRight4, 32.9, 13.2, 9),
          chipRest(chipRight5, 37.5, 13.2, 8),
          chipRest(chipRight6, 31.8, 4.4, 9)
        ];
        const restChipRightSingle = chipRest(chipRightSingle, 22.8, 3.8, 9);

        const ANIM_CYCLE_MS = 3000;
        const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
        const easeInOut = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

        let animStart = 0;
        const tickerFn = () => {
          if (!leftHand || !leftForearm || !rightArm || !rightForearm || !rightHand) return;
          const now = performance.now();
          const elapsed = (now - animStart) % ANIM_CYCLE_MS;

          if (elapsed < 400) {
            const t = easeInOut(Math.min(1, elapsed / 400));
            leftHand.y = lerp(rest.leftHand.y, rest.leftHand.y - 0.18 * rest.leftHand.h, t);
            leftHand.rotation = lerp(0, (-18 * Math.PI) / 180, t);
            leftForearm.y = lerp(rest.leftForearm.y, rest.leftForearm.y - 0.14 * rest.leftForearm.h, t);
            leftForearm.rotation = lerp(0, (-14 * Math.PI) / 180, t);
            const chipH = (s: Sprite, sc: number) => s.texture.height * sc;
            chipsLeft.forEach((chip, i) => {
              const r0 = restChipsLeft[i];
              const yOff = (70 + (i % 3) * 2) / 100;
              const r = (i % 2 === 0 ? -1 : 1) * (14 + (i % 2)) * (Math.PI / 180);
              const scale = lerp(r0.scale, r0.scale * 1.08, t);
              chip.scale.set(scale);
              chip.x = r0.x;
              chip.y = lerp(r0.y, r0.y - chipH(chip, r0.scale) * yOff, t);
              chip.rotation = lerp(0, r, t);
            });
            chipsLeftSingle.forEach((chip, i) => {
              const r0 = restChipsLeftSingle[i];
              const yOff = (650 + (i % 3) * 2) / 100;
              const r = (i % 2 === 0 ? -1 : 1) * (10 + (i % 1)) * (Math.PI / 180);
              const scale = lerp(r0.scale, r0.scale * 1.08, t);
              chip.scale.set(scale);
              chip.x = r0.x;
              chip.y = lerp(r0.y, r0.y - chipH(chip, r0.scale) * yOff, t);
              chip.rotation = lerp(0, r, t);
            });
          } else if (elapsed < 700) {
            leftHand.y = rest.leftHand.y;
            leftHand.rotation = 0;
            leftForearm.y = rest.leftForearm.y;
            leftForearm.rotation = 0;
            chipsLeft.forEach((chip, i) => {
              const r0 = restChipsLeft[i];
              chip.scale.set(r0.scale);
              chip.x = r0.x;
              chip.y = r0.y;
              chip.rotation = 0;
            });
            chipsLeftSingle.forEach((chip, i) => {
              const r0 = restChipsLeftSingle[i];
              chip.scale.set(r0.scale);
              chip.x = r0.x;
              chip.y = r0.y;
              chip.rotation = 0;
            });
          }

          if (elapsed >= 700 && elapsed < 1100) {
            const t = easeInOut(Math.min(1, (elapsed - 700) / 400));
            rightArm.y = lerp(rest.rightArm.y, rest.rightArm.y - 0.1 * rest.rightArm.h, t);
            rightArm.x = lerp(rest.rightArm.x, rest.rightArm.x - 0.35 * rest.rightArm.w, t);
            rightArm.rotation = lerp(0, (28 * Math.PI) / 180, t);
            rightForearm.y = lerp(rest.rightForearm.y, rest.rightForearm.y - 0.32 * rest.rightForearm.h, t);
            rightForearm.x = lerp(rest.rightForearm.x, rest.rightForearm.x - 0.45 * rest.rightForearm.w, t);
            rightForearm.rotation = lerp(0, (22 * Math.PI) / 180, t);
            rightHand.y = lerp(rest.rightHand.y, rest.rightHand.y - 0.5 * rest.rightHand.h, t);
            rightHand.x = lerp(rest.rightHand.x, rest.rightHand.x - 0.15 * rest.rightHand.w, t);
            rightHand.rotation = lerp(0, (24 * Math.PI) / 180, t);
            const chipH = (s: Sprite, sc: number) => s.texture.height * sc;
            chipsRight.forEach((chip, i) => {
              const r0 = restChipsRight[i];
              const yOff = (70 + (i % 3) * 2) / 100;
              const r = (i % 2 === 0 ? -1 : 1) * (14 + (i % 2)) * (Math.PI / 180);
              const scale = lerp(r0.scale, r0.scale * 1.08, t);
              chip.scale.set(scale);
              chip.x = r0.x;
              chip.y = lerp(r0.y, r0.y - chipH(chip, r0.scale) * yOff, t);
              chip.rotation = lerp(0, r, t);
            });
            chipRightSingle.scale.set(lerp(restChipRightSingle.scale, restChipRightSingle.scale * 1.08, t));
            chipRightSingle.x = restChipRightSingle.x;
            chipRightSingle.y = lerp(restChipRightSingle.y, restChipRightSingle.y - chipH(chipRightSingle, restChipRightSingle.scale) * 6.5, t);
            chipRightSingle.rotation = lerp(0, (10 * Math.PI) / 180, t);
          } else if (elapsed >= 1100 && elapsed < 1400) {
            rightArm.y = rest.rightArm.y - 0.1 * rest.rightArm.h;
            rightArm.x = rest.rightArm.x - 0.35 * rest.rightArm.w;
            rightArm.rotation = (28 * Math.PI) / 180;
            rightForearm.y = rest.rightForearm.y - 0.32 * rest.rightForearm.h;
            rightForearm.x = rest.rightForearm.x - 0.45 * rest.rightForearm.w;
            rightForearm.rotation = (22 * Math.PI) / 180;
            rightHand.y = rest.rightHand.y - 0.5 * rest.rightHand.h;
            rightHand.x = rest.rightHand.x - 0.15 * rest.rightHand.w;
            rightHand.rotation = (24 * Math.PI) / 180;
          } else if (elapsed >= 1400) {
            rightArm.y = rest.rightArm.y;
            rightArm.x = rest.rightArm.x;
            rightArm.rotation = 0;
            rightForearm.y = rest.rightForearm.y;
            rightForearm.x = rest.rightForearm.x;
            rightForearm.rotation = 0;
            rightHand.y = rest.rightHand.y;
            rightHand.x = rest.rightHand.x;
            rightHand.rotation = 0;
            chipsRight.forEach((chip, i) => {
              const r0 = restChipsRight[i];
              chip.scale.set(r0.scale);
              chip.x = r0.x;
              chip.y = r0.y;
              chip.rotation = 0;
            });
            chipRightSingle.scale.set(restChipRightSingle.scale);
            chipRightSingle.x = restChipRightSingle.x;
            chipRightSingle.y = restChipRightSingle.y;
            chipRightSingle.rotation = 0;
          }
        };

        app.ticker.add(tickerFn);
        removeTicker = () => app?.ticker.remove(tickerFn);

        animStart = performance.now();
      } catch (err) {
        console.warn("RegisterBonusPixi init warning:", err);
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
          console.warn("RegisterBonusPixi destroy warning:", e);
        }
      }
    };
  }, []);

  return <div ref={canvasRef} style={{ width: "100%", height: "100%" }} />;
};

export default RegisterBonusPixi;
