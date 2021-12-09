import { Points, RepeatWrapping } from "three";
import MeshStandard from "./MeshStandard";

export default function CreateMaterials(textures) {
	const SIStandardMaterial = MeshStandard("red", textures.SItextures);

	const MMStandardMaterial = MeshStandard("", textures.MMtextures);

	const BIStandardMaterial = MeshStandard("violet", textures.BItextures);

	const pointsMaterial = new Points("blue", 0.04);

	return {
		SIStandardMaterial,
		MMStandardMaterial,
		BIStandardMaterial,
		pointsMaterial,
	};
}
