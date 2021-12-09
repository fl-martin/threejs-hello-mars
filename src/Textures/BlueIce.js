import TexturesLoader from "./TexturesLoader";
import basecolor from "../Images/Blue_Ice_001_SD/basecolor.jpg";
import normalmap from "../Images/Blue_Ice_001_SD/normalmap.jpg";
import displacementmap from "../Images/Blue_Ice_001_SD/heightmap.png";
import roughnessmap from "../Images/Blue_Ice_001_SD/roughnessmap.jpg";
import aomap from "../Images/Blue_Ice_001_SD/aomap.jpg";

export default function BlueIce() {
	const baseColor = TexturesLoader.load(basecolor);
	const normalMap = TexturesLoader.load(normalmap);
	const displacementMap = TexturesLoader.load(displacementmap);
	const aoMap = TexturesLoader.load(aomap);

	return {
		baseColor,
		normalMap,
		displacementMap,
		aoMap,
	};
}
