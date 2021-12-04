import TexturesLoader from "./TexturesLoader";
import basecolor from "../Images/SurfaceImperfections/basecolor.jpg";
import normalmap from "../Images/SurfaceImperfections/normalmap.jpg";
import displacementmap from "../Images/SurfaceImperfections/heightmap.png";
import roughnessmap from "../Images/SurfaceImperfections/roughnessmap.jpg";
import aomap from "../Images/SurfaceImperfections/roughnessmap.jpg";

export default function SurfaceImperfection() {
	const baseColor = TexturesLoader.load(basecolor);
	const normalMap = TexturesLoader.load(normalmap);
	const displacementMap = TexturesLoader.load(displacementmap);
	const roughnessMap = TexturesLoader.load(roughnessmap);
	const aoMap = TexturesLoader.load(aomap);

	return { baseColor, normalMap, displacementMap, roughnessMap, aoMap };
}
