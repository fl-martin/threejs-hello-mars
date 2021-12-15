import TexturesLoader from "./TexturesLoader";
import basecolor from "../Images/Concrete_Blocks_011_SD/basecolor.jpg";
import normalmap from "../Images/Concrete_Blocks_011_SD/normalmap.jpg";
import displacementmap from "../Images/Concrete_Blocks_011_SD/heightmap.png";
import roughnessmap from "../Images/Concrete_Blocks_011_SD/roughnessmap.jpg";
import aomap from "../Images/Concrete_Blocks_011_SD/aomap.jpg";

export default function ConcreteBlocks() {
	const baseColor = TexturesLoader.load(basecolor);
	const normalMap = TexturesLoader.load(normalmap);
	const displacementMap = TexturesLoader.load(displacementmap);
	const roughnessMap = TexturesLoader.load(roughnessmap);
	const aoMap = TexturesLoader.load(aomap);

	return {
		baseColor,
		normalMap,
		displacementMap,
		roughnessMap,
		aoMap,
	};
}
