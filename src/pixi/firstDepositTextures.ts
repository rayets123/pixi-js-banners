import { Assets, Texture } from "pixi.js";

export interface FirstDepositTextures {
  body: Texture;
  head: Texture;
  leftHand: Texture;
  arm: Texture;
  hand: Texture;
  finger: Texture;
}

// Загрузка текстур для 1st-deposit из папки 1st-deposit/animated
export const loadFirstDepositTextures = async (): Promise<FirstDepositTextures> => {
  const bodyUrl = new URL("../../1st-deposit/animated/body.webp", import.meta.url).href;
  const headUrl = new URL("../../1st-deposit/animated/head.webp", import.meta.url).href;
  const leftHandUrl = new URL("../../1st-deposit/animated/left_hand.webp", import.meta.url).href;
  const armUrl = new URL("../../1st-deposit/animated/arm.webp", import.meta.url).href;
  const handUrl = new URL("../../1st-deposit/animated/hand.webp", import.meta.url).href;
  const fingerUrl = new URL("../../1st-deposit/animated/finger.webp", import.meta.url).href;

  console.log("FirstDeposit texture URLs", {
    bodyUrl,
    headUrl,
    leftHandUrl,
    armUrl,
    handUrl,
    fingerUrl
  });

  const [body, head, leftHand, arm, hand, finger] = await Promise.all<Texture>([
    Assets.load(bodyUrl),
    Assets.load(headUrl),
    Assets.load(leftHandUrl),
    Assets.load(armUrl),
    Assets.load(handUrl),
    Assets.load(fingerUrl)
  ]);

  return {
    body,
    head,
    leftHand,
    arm,
    hand,
    finger
  };
};

