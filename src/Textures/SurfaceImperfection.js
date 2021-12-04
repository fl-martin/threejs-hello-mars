import TexturesLoader from "./TexturesLoader";
import basecolor from "../Imagenes/SurfaceImperfections/basecolor.jpg";
import normalmap from "../Imagenes/SurfaceImperfections/normalmap.jpg";
import displacementmap from "../Imagenes/SurfaceImperfections/heightmap.png";
import roughnessmap from "../Imagenes/SurfaceImperfections/roughnessmap.jpg";
import aomap from "../Imagenes/SurfaceImperfections/roughnessmap.jpg";

export default function SurfaceImperfection() {
	const baseColor = TexturesLoader.load(basecolor);
	const normalMap = TexturesLoader.load(normalmap);
	const displacementMap = TexturesLoader.load(displacementmap);
	const roughnessMap = TexturesLoader.load(roughnessmap);
	const aoMap = TexturesLoader.load(aomap);

	return { baseColor, normalMap, displacementMap, roughnessMap, aoMap };
}
