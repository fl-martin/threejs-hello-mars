import TexturesLoader from "./TexturesLoader";
import basecolor from "../Images/Metal_Mesh_008_SD/basecolor.jpg";
import normalmap from "../Images/Metal_Mesh_008_SD/normalmap.jpg";
import displacementmap from "../Images/Metal_Mesh_008_SD/heightmap.png";
import roughnessmap from "../Images/Metal_Mesh_008_SD/roughnessmap.jpg";
import aomap from "../Images/Metal_Mesh_008_SD/aomap.jpg";
import alphamap from "../Images/Metal_Mesh_008_SD/opacitymap.jpg";
import metallicmap from "../Images/Metal_Mesh_008_SD/metallicmap.jpg";

export default function MetalMesh() {
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
