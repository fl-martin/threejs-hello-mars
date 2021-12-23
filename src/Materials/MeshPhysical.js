import { MeshPhysicalMaterial } from "three";

export default function MeshPhysical(color = null, textures) {
	const material = new MeshPhysicalMaterial({
		color: color,
		map: textures?.baseColor || null,
		normalMap: textures?.normalMap || null,
		displacementMap: textures?.displacementMap || null,
		roughnessMap: textures?.roughnessMap || null,
		aoMap: textures?.aoMap || null,
		alphaMap: textures?.alphaMap || null,
		metalnessMap: textures?.metalnessMap || null,
	});

	return material;
}
