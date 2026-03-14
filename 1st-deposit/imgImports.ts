interface ImgImports {
	[key: string]: string;
}
export const getImgList = (geo: string | null): ImgImports => {
	return {

		body: new URL("./animated/body.webp", import.meta.url).href,
		head: new URL("./animated/head.webp", import.meta.url).href,
		left_hand: new URL("./animated/left_hand.webp", import.meta.url).href,
		arm: new URL("./animated/arm.webp", import.meta.url).href,
		hand: new URL("./animated/hand.webp", import.meta.url).href,
		finger: new URL("./animated/finger.webp", import.meta.url).href
	};
};
export default getImgList;
