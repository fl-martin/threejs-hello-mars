import { RepeatWrapping } from "three";
import BlueIce from "./BlueIce";
import MetalMesh from "./MetalMesh";
import SurfaceImperfection from "./SurfaceImperfection";

export default function CreateTextures() {
	const SItextures = SurfaceImperfection();

	const MMtextures = MetalMesh();
	for (const text in MMtextures) {
		MMtextures[text].wrapS = MMtextures[text].wrapT = RepeatWrapping;
		MMtextures[text].repeat.set(4, 4);
	}

	const BItextures = BlueIce();

	return { SItextures, MMtextures, BItextures };
}
