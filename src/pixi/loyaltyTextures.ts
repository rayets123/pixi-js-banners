import { Assets, Texture } from "pixi.js";

export interface LoyaltyTextures {
  body: Texture;
  hat: Texture;
  hat_bottom: Texture;
  face: Texture;
  mustache: Texture;
  beard: Texture;
  eyes: Texture;
  mustache_left: Texture;
  mustache_right: Texture;
  nose: Texture;
  mouth: Texture;
  coins_pot: Texture;
  right_sleeve: Texture;
  right_finger_open: Texture;
  right_hand_full: Texture;
  right_finger_closed: Texture;
  left_arm: Texture;
  left_forearm: Texture;
  left_hand: Texture;
  left_fingers_open: Texture;
  left_fingers_closed: Texture;
  left_thumb_open: Texture;
  left_thumb_closed: Texture;
  coin_splash_start: Texture;
  coin_splash_1: Texture;
  coin_splash_2: Texture;
}

const base = "../../loyalty/animated";
const load = (path: string) => Assets.load(new URL(`${base}/${path}`, import.meta.url).href);

export const loadLoyaltyTextures = async (): Promise<LoyaltyTextures> => {
  const [
    body,
    hat,
    hat_bottom,
    face,
    mustache,
    beard,
    eyes,
    mustache_left,
    mustache_right,
    nose,
    mouth,
    coins_pot,
    right_sleeve,
    right_finger_open,
    right_hand_full,
    right_finger_closed,
    left_arm,
    left_forearm,
    left_hand,
    left_fingers_open,
    left_fingers_closed,
    left_thumb_open,
    left_thumb_closed,
    coin_splash_start,
    coin_splash_1,
    coin_splash_2
  ] = await Promise.all([
    load("body.webp"),
    load("hat.webp"),
    load("hat_bottom.webp"),
    load("face.webp"),
    load("mustache.webp"),
    load("beard.webp"),
    load("eyes.webp"),
    load("mustache_left.webp"),
    load("mustache_right.webp"),
    load("nose.webp"),
    load("mouth.webp"),
    load("coins_pot.webp"),
    load("right_sleeve.webp"),
    load("right_finger_open.webp"),
    load("right_hand_full.webp"),
    load("right_finger_closed.webp"),
    load("left_arm.webp"),
    load("left_forearm.webp"),
    load("left_hand.webp"),
    load("left_fingers_open.webp"),
    load("left_fingers_closed.webp"),
    load("left_thumb_open.webp"),
    load("left_thumb_closed.webp"),
    load("coin_splash_start.webp"),
    load("coin_splash_1.webp"),
    load("coin_splash_2.webp")
  ]);

  return {
    body,
    hat,
    hat_bottom,
    face,
    mustache,
    beard,
    eyes,
    mustache_left,
    mustache_right,
    nose,
    mouth,
    coins_pot,
    right_sleeve,
    right_finger_open,
    right_hand_full,
    right_finger_closed,
    left_arm,
    left_forearm,
    left_hand,
    left_fingers_open,
    left_fingers_closed,
    left_thumb_open,
    left_thumb_closed,
    coin_splash_start,
    coin_splash_1,
    coin_splash_2
  };
};
