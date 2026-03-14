interface ImgImports {
	[key: string]: string;
}

export const getImgList = (geo: string | null): ImgImports => {
	return {

		body: new URL("./animated/body.webp", import.meta.url).href,
		hat: new URL("./animated/hat.webp", import.meta.url).href,
		hat_bottom: new URL("./animated/hat_bottom.webp", import.meta.url).href,
		face: new URL("./animated/face.webp", import.meta.url).href,
		mustache: new URL("./animated/mustache.webp", import.meta.url).href,
		beard: new URL("./animated/beard.webp", import.meta.url).href,
		eyes: new URL("./animated/eyes.webp", import.meta.url).href,
		mustache_left: new URL("./animated/mustache_left.webp", import.meta.url).href,
		mustache_right: new URL("./animated/mustache_right.webp", import.meta.url).href,
		nose: new URL("./animated/nose.webp", import.meta.url).href,
		mouth: new URL("./animated/mouth.webp", import.meta.url).href,
		eyebrow_left: new URL("./animated/eyebrow_left.webp", import.meta.url).href,
		eyebrow_right: new URL("./animated/eyebrow_right.webp", import.meta.url).href,
		coins_pot: new URL("./animated/coins_pot.webp", import.meta.url).href,
		right_hand: new URL("./animated/right_hand.webp", import.meta.url).href,
		right_sleeve: new URL("./animated/right_sleeve.webp", import.meta.url).href,
		right_finger_open: new URL("./animated/right_finger_open.webp", import.meta.url).href,
		right_hand_full: new URL("./animated/right_hand_full.webp", import.meta.url).href,
		right_finger_closed: new URL("./animated/right_finger_closed.webp", import.meta.url).href,
		left_hand: new URL("./animated/left_hand.webp", import.meta.url).href,
		left_arm: new URL("./animated/left_arm.webp", import.meta.url).href,
		left_forearm: new URL("./animated/left_forearm.webp", import.meta.url).href,
		left_fingers_open: new URL("./animated/left_fingers_open.webp", import.meta.url).href,
		left_fingers_closed: new URL("./animated/left_fingers_closed.webp", import.meta.url).href,
		left_thumb_closed: new URL("./animated/left_thumb_closed.webp", import.meta.url).href,
		left_thumb_open: new URL("./animated/left_thumb_open.webp", import.meta.url).href,
		coins: new URL("./animated/coins.webp", import.meta.url).href,
		coin_splash_1: new URL("./animated/coin_splash_1.webp", import.meta.url).href,
		coin_splash_2: new URL("./animated/coin_splash_2.webp", import.meta.url).href,
		coin_splash_start: new URL("./animated/coin_splash_start.webp", import.meta.url).href
	};
};
export default getImgList;
