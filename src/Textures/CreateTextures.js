import BlueIce from "./BlueIce";
import ConcreteBlocks from "./ConcreteBlocks";
import GlassPattern from "./GlassPattern";
import MetalMesh from "./MetalMesh";
import RepeatTextures from "./RepeatTextures";
import SurfaceImperfection from "./SurfaceImperfection";

export default function CreateTextures() {
	const SItextures = SurfaceImperfection();

	const MMtextures = MetalMesh();
	RepeatTextures(MMtextures, 2);

	const BItextures = BlueIce();

	const CBtextures = ConcreteBlocks();
	RepeatTextures(CBtextures, 4);

	const GPtextures = GlassPattern();

	return { SItextures, MMtextures, BItextures, GPtextures };
}
