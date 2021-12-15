import { Points } from "three";
import MeshPhysical from "./MeshPhysical";
import MeshStandard from "./MeshStandard";

export default function CreateMaterials(textures) {
	const SIStandardMaterial = MeshStandard("black", textures.SItextures);

	const MMStandardMaterial = MeshStandard("", textures.MMtextures);

	const BIStandardMaterial = MeshStandard("violet", textures.BItextures);

	const CBStandardMaterial = MeshPhysical("", textures.CBtextures);

	const pointsMaterial = new Points("blue", 0.04);

	return {
		SIStandardMaterial,
		MMStandardMaterial,
		BIStandardMaterial,
		CBStandardMaterial,
		pointsMaterial,
	};
}
