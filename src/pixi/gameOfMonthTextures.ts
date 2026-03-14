import { Assets, Texture } from "pixi.js";

export interface GameOfMonthTextures {
  body: Texture;
  head: Texture;
  eyebrows: Texture;
  nose: Texture;
  mustache_left: Texture;
  mustache_right: Texture;
  left_arm: Texture;
  right_hand_tool: Texture;
  plate_empty: Texture;
  food: Texture;
  game: Texture;
}

export const loadGameOfMonthTextures = async (): Promise<GameOfMonthTextures> => {
  const [body, head, eyebrows, nose, mustache_left, mustache_right, left_arm, right_hand_tool, plate_empty, food, game] =
    await Promise.all([
      Assets.load(new URL("../../game-of-month/animated/body.webp", import.meta.url).href),
      Assets.load(new URL("../../game-of-month/animated/head.webp", import.meta.url).href),
      Assets.load(new URL("../../game-of-month/animated/eyebrows.webp", import.meta.url).href),
      Assets.load(new URL("../../game-of-month/animated/nose.webp", import.meta.url).href),
      Assets.load(new URL("../../game-of-month/animated/mustache_left.webp", import.meta.url).href),
      Assets.load(new URL("../../game-of-month/animated/mustache_right.webp", import.meta.url).href),
      Assets.load(new URL("../../game-of-month/animated/left_arm.webp", import.meta.url).href),
      Assets.load(new URL("../../game-of-month/animated/right_hand_tool.webp", import.meta.url).href),
      Assets.load(new URL("../../game-of-month/animated/plate_empty.webp", import.meta.url).href),
      Assets.load(new URL("../../game-of-month/animated/food.webp", import.meta.url).href),
      Assets.load(new URL("../../game-of-month/animated/game.webp", import.meta.url).href)
    ]);
  return {
    body,
    head,
    eyebrows,
    nose,
    mustache_left,
    mustache_right,
    left_arm,
    right_hand_tool,
    plate_empty,
    food,
    game
  };
};
