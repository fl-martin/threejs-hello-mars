import MetalMesh from "./MetalMesh";
import SurfaceImperfection from "./SurfaceImperfection";

export default function CreateTextures() {
	const SItextures = SurfaceImperfection();

	const MMtextures = MetalMesh();

	return { SItextures, MMtextures };
}
