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

// Относительный путь — Vite подхватывает при сборке и кладёт в dist/assets/ с хешем (как firstDeposit)
const base = "../../register-bonus/animated";
const load = (path: string) => Assets.load(new URL(`${base}/${path}`, import.meta.url).href);

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
    load("head.webp"),
    load("hat_top.webp"),
    load("hat_bottom.webp"),
    load("eyes.webp"),
    load("nose_mustache.webp"),
    load("body.webp"),
    load("left_hand.webp"),
    load("left_forearm.webp"),
    load("right_hand.webp"),
    load("right_forearm.webp"),
    load("right_arm.webp"),
    load("chip_left_single.webp"),
    load("chip_left_0.webp"),
    load("chip_left_1.webp"),
    load("chip_left_2.webp"),
    load("chip_left_3.webp"),
    load("chip_left_4.webp"),
    load("chip_right_0.webp"),
    load("chip_right_1.webp"),
    load("chip_right_3.webp"),
    load("chip_right_4.webp"),
    load("chip_right_5.webp"),
    load("chip_right_6.webp"),
    load("chip_right_single.webp")
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
