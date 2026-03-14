interface ImgImports {
	[key: string]: string;
}

export const getImgList = (geo: string | null): ImgImports => {
	return {

		body: new URL("./animated/body.webp", import.meta.url).href,
		head: new URL("./animated/head.webp", import.meta.url).href,
		eyebrows: new URL("./animated/eyebrows.webp", import.meta.url).href,
		nose: new URL("./animated/nose.webp", import.meta.url).href,
		mustache_left: new URL("./animated/mustache_left.webp", import.meta.url).href,
		mustache_right: new URL("./animated/mustache_right.webp", import.meta.url).href,
		left_hand_plate: new URL("./animated/left_hand_plate.webp", import.meta.url).href,
		left_arm: new URL("./animated/left_arm.webp", import.meta.url).href,
		right_hand_tool: new URL("./animated/right_hand_tool.webp", import.meta.url).href,
		plate_empty: new URL("./animated/plate_empty.webp", import.meta.url).href,
		food: new URL("./animated/food.webp", import.meta.url).href,
		game: new URL("./animated/game.webp", import.meta.url).href
	};
};
export default getImgList;
