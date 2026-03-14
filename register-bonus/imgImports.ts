interface ImgImports {
	[key: string]: string;
}

export const getImgList = (): ImgImports => {
	return {

		head: new URL("./animated/head.webp", import.meta.url).href,
		hat_top: new URL("./animated/hat_top.webp", import.meta.url).href,
		hat_bottom: new URL("./animated/hat_bottom.webp", import.meta.url).href,
		eyes: new URL("./animated/eyes.webp", import.meta.url).href,
		nose_mustache: new URL("./animated/nose_mustache.webp", import.meta.url).href,
		body: new URL("./animated/body.webp", import.meta.url).href,
		left_hand: new URL("./animated/left_hand.webp", import.meta.url).href,
		left_forearm: new URL("./animated/left_forearm.webp", import.meta.url).href,
		right_hand: new URL("./animated/right_hand.webp", import.meta.url).href,
		right_forearm: new URL("./animated/right_forearm.webp", import.meta.url).href,
		right_arm: new URL("./animated/right_arm.webp", import.meta.url).href,
		chip_left_single: new URL("./animated/chip_left_single.webp", import.meta.url).href,
		chip_left_0: new URL("./animated/chip_left_0.webp", import.meta.url).href,
		chip_left_1: new URL("./animated/chip_left_1.webp", import.meta.url).href,
		chip_left_2: new URL("./animated/chip_left_2.webp", import.meta.url).href,
		chip_left_3: new URL("./animated/chip_left_3.webp", import.meta.url).href,
		chip_left_4: new URL("./animated/chip_left_4.webp", import.meta.url).href,
		chip_right_0: new URL("./animated/chip_right_0.webp", import.meta.url).href,
		chip_right_1: new URL("./animated/chip_right_1.webp", import.meta.url).href,
		chip_right_3: new URL("./animated/chip_right_3.webp", import.meta.url).href,
		chip_right_4: new URL("./animated/chip_right_4.webp", import.meta.url).href,
		chip_right_5: new URL("./animated/chip_right_5.webp", import.meta.url).href,
		chip_right_6: new URL("./animated/chip_right_6.webp", import.meta.url).href,
		chip_right_single: new URL("./animated/chip_right_single.webp", import.meta.url).href
	};
};
export default getImgList;
