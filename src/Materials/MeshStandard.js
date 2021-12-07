import { MeshStandardMaterial } from "three";

export default function MeshStandard(color = null, textures) {
	const material = new MeshStandardMaterial({
		color: color,
		map: textures.baseColor || null,
		normalMap: textures.normalMap || null,
		displacementMap: textures.displacementMap || null,
		displacementScale: 0,
		roughnessMap: textures.roughnessMap || null,
		roughness: 1,
		aoMap: textures.aoMap || null,
		alphaMap: textures.alphaMap || null,
		transparent: true,
		metalnessMap: textures.metalnessMap || null,
	});

	return material;
}
