import { DoubleSide, FrontSide, MeshStandardMaterial } from "three";

export default function MeshStandard(color = null, textures) {
	const material = new MeshStandardMaterial({
		color: color,
		map: textures.baseColor || undefined,
		normalMap: textures.normalMap || undefined,
		displacementMap: textures.displacementMap || undefined,
		displacementScale: 0,
		roughnessMap: textures.roughnessMap || undefined,
		roughness: 1,
		aoMap: textures.aoMap || undefined,
		alphaMap: textures.alphaMap || undefined,
		transparent: true,
		metalnessMap: textures.metalnessMap || undefined,
	});

	return material;
}

//escribir OR null por los casos en los que no contenga es map
