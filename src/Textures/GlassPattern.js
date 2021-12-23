import TexturesLoader from "./TexturesLoader";
import basecolor from "../Images/Glass_Pattern_001_SD/basecolor.jpg";
import normalmap from "../Images/Glass_Pattern_001_SD/normalmap.jpg";
import displacementmap from "../Images/Glass_Pattern_001_SD/heightmap.png";
import roughnessmap from "../Images/Glass_Pattern_001_SD/roughnessmap.jpg";
import aomap from "../Images/Glass_Pattern_001_SD/aomap.jpg";
import alphamap from "../Images/Glass_Pattern_001_SD/opacitymap.jpg";
import metallicmap from "../Images/Glass_Pattern_001_SD/metallicmap.jpg";

export default function GlassPattern() {
	const baseColor = TexturesLoader.load(basecolor);
	const normalMap = TexturesLoader.load(normalmap);
	const displacementMap = TexturesLoader.load(displacementmap);
	const roughnessMap = TexturesLoader.load(roughnessmap);
	const aoMap = TexturesLoader.load(aomap);
	const alphaMap = TexturesLoader.load(alphamap);
	const metalnessMap = TexturesLoader.load(metallicmap);

	return {
		baseColor,
		normalMap,
		displacementMap,
		roughnessMap,
		aoMap,
		alphaMap,
		metalnessMap,
	};
}
