import { Assets, Texture } from "pixi.js";

export interface RegisterBonusTextures {
  head: Texture;
  hat_top: Texture;
  hat_bottom: Texture;
  eyes: Texture;
  nose_mustache: Texture;
  body: Texture;
  left_hand: Texture;
  left_forearm: Texture;
  right_hand: Texture;
  right_forearm: Texture;
  right_arm: Texture;
  chip_left_single: Texture;
  chip_left_0: Texture;
  chip_left_1: Texture;
  chip_left_2: Texture;
  chip_left_3: Texture;
  chip_left_4: Texture;
  chip_right_0: Texture;
  chip_right_1: Texture;
  chip_right_3: Texture;
  chip_right_4: Texture;
  chip_right_5: Texture;
  chip_right_6: Texture;
  chip_right_single: Texture;
}

// Явные пути — Vite подхватывает при сборке и кладёт в dist/assets/ (как firstDeposit / game-of-month)
export const loadRegisterBonusTextures = async (): Promise<RegisterBonusTextures> => {
  const [
    head,
    hat_top,
    hat_bottom,
    eyes,
    nose_mustache,
    body,
    left_hand,
    left_forearm,
    right_hand,
    right_forearm,
    right_arm,
    chip_left_single,
    chip_left_0,
    chip_left_1,
    chip_left_2,
    chip_left_3,
    chip_left_4,
    chip_right_0,
    chip_right_1,
    chip_right_3,
    chip_right_4,
    chip_right_5,
    chip_right_6,
    chip_right_single
  ] = await Promise.all([
    Assets.load(new URL("../../register-bonus/animated/head.webp", import.meta.url).href),
    Assets.load(new URL("../../register-bonus/animated/hat_top.webp", import.meta.url).href),
    Assets.load(new URL("../../register-bonus/animated/hat_bottom.webp", import.meta.url).href),
    Assets.load(new URL("../../register-bonus/animated/eyes.webp", import.meta.url).href),
    Assets.load(new URL("../../register-bonus/animated/nose_mustache.webp", import.meta.url).href),
    Assets.load(new URL("../../register-bonus/animated/body.webp", import.meta.url).href),
    Assets.load(new URL("../../register-bonus/animated/left_hand.webp", import.meta.url).href),
    Assets.load(new URL("../../register-bonus/animated/left_forearm.webp", import.meta.url).href),
    Assets.load(new URL("../../register-bonus/animated/right_hand.webp", import.meta.url).href),
    Assets.load(new URL("../../register-bonus/animated/right_forearm.webp", import.meta.url).href),
    Assets.load(new URL("../../register-bonus/animated/right_arm.webp", import.meta.url).href),
    Assets.load(new URL("../../register-bonus/animated/chip_left_single.webp", import.meta.url).href),
    Assets.load(new URL("../../register-bonus/animated/chip_left_0.webp", import.meta.url).href),
    Assets.load(new URL("../../register-bonus/animated/chip_left_1.webp", import.meta.url).href),
    Assets.load(new URL("../../register-bonus/animated/chip_left_2.webp", import.meta.url).href),
    Assets.load(new URL("../../register-bonus/animated/chip_left_3.webp", import.meta.url).href),
    Assets.load(new URL("../../register-bonus/animated/chip_left_4.webp", import.meta.url).href),
    Assets.load(new URL("../../register-bonus/animated/chip_right_0.webp", import.meta.url).href),
    Assets.load(new URL("../../register-bonus/animated/chip_right_1.webp", import.meta.url).href),
    Assets.load(new URL("../../register-bonus/animated/chip_right_3.webp", import.meta.url).href),
    Assets.load(new URL("../../register-bonus/animated/chip_right_4.webp", import.meta.url).href),
    Assets.load(new URL("../../register-bonus/animated/chip_right_5.webp", import.meta.url).href),
    Assets.load(new URL("../../register-bonus/animated/chip_right_6.webp", import.meta.url).href),
    Assets.load(new URL("../../register-bonus/animated/chip_right_single.webp", import.meta.url).href)
  ]);

  return {
    head,
    hat_top,
    hat_bottom,
    eyes,
    nose_mustache,
    body,
    left_hand,
    left_forearm,
    right_hand,
    right_forearm,
    right_arm,
    chip_left_single,
    chip_left_0,
    chip_left_1,
    chip_left_2,
    chip_left_3,
    chip_left_4,
    chip_right_0,
    chip_right_1,
    chip_right_3,
    chip_right_4,
    chip_right_5,
    chip_right_6,
    chip_right_single
  };
};
