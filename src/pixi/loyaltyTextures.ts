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

// Явные пути — Vite подхватывает при сборке и кладёт в dist/assets/ (как firstDeposit / game-of-month)
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
    Assets.load(new URL("../../loyalty/animated/body.webp", import.meta.url).href),
    Assets.load(new URL("../../loyalty/animated/hat.webp", import.meta.url).href),
    Assets.load(new URL("../../loyalty/animated/hat_bottom.webp", import.meta.url).href),
    Assets.load(new URL("../../loyalty/animated/face.webp", import.meta.url).href),
    Assets.load(new URL("../../loyalty/animated/mustache.webp", import.meta.url).href),
    Assets.load(new URL("../../loyalty/animated/beard.webp", import.meta.url).href),
    Assets.load(new URL("../../loyalty/animated/eyes.webp", import.meta.url).href),
    Assets.load(new URL("../../loyalty/animated/mustache_left.webp", import.meta.url).href),
    Assets.load(new URL("../../loyalty/animated/mustache_right.webp", import.meta.url).href),
    Assets.load(new URL("../../loyalty/animated/nose.webp", import.meta.url).href),
    Assets.load(new URL("../../loyalty/animated/mouth.webp", import.meta.url).href),
    Assets.load(new URL("../../loyalty/animated/coins_pot.webp", import.meta.url).href),
    Assets.load(new URL("../../loyalty/animated/right_sleeve.webp", import.meta.url).href),
    Assets.load(new URL("../../loyalty/animated/right_finger_open.webp", import.meta.url).href),
    Assets.load(new URL("../../loyalty/animated/right_hand_full.webp", import.meta.url).href),
    Assets.load(new URL("../../loyalty/animated/right_finger_closed.webp", import.meta.url).href),
    Assets.load(new URL("../../loyalty/animated/left_arm.webp", import.meta.url).href),
    Assets.load(new URL("../../loyalty/animated/left_forearm.webp", import.meta.url).href),
    Assets.load(new URL("../../loyalty/animated/left_hand.webp", import.meta.url).href),
    Assets.load(new URL("../../loyalty/animated/left_fingers_open.webp", import.meta.url).href),
    Assets.load(new URL("../../loyalty/animated/left_fingers_closed.webp", import.meta.url).href),
    Assets.load(new URL("../../loyalty/animated/left_thumb_open.webp", import.meta.url).href),
    Assets.load(new URL("../../loyalty/animated/left_thumb_closed.webp", import.meta.url).href),
    Assets.load(new URL("../../loyalty/animated/coin_splash_start.webp", import.meta.url).href),
    Assets.load(new URL("../../loyalty/animated/coin_splash_1.webp", import.meta.url).href),
    Assets.load(new URL("../../loyalty/animated/coin_splash_2.webp", import.meta.url).href)
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
