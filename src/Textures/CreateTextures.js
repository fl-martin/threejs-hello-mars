import BlueIce from "./BlueIce";
import MetalMesh from "./MetalMesh";
import RepeatTextures from "./RepeatTextures";
import SurfaceImperfection from "./SurfaceImperfection";

export default function CreateTextures() {
	const SItextures = SurfaceImperfection();

	const MMtextures = MetalMesh();
	RepeatTextures(MMtextures, 2);

	const BItextures = BlueIce();

	return { SItextures, MMtextures, BItextures };
}
