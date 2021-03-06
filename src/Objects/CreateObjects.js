import { DoubleSide, PlaneBufferGeometry } from "three";
import CreateMesh from "./Mesh";
import CreatePoints from "./Points";
import { Reflector } from "three/examples/jsm/objects/Reflector";

export default function CreateObjects(geometries, materials) {
	const floor = CreateMesh(
		geometries.plane,
		materials.BIStandardMaterial,
		{ posX: 0, posY: -3, posZ: 0 },
		{
			rotX: Math.PI / -2,
			rotY: 0,
			rotZ: 0,
		}
	);
	floor.scale.set(15, 15, 1);
	floor.material.metalness = 0;
	floor.material.roughness = 1;
	floor.material.displacementScale = -5;

	const wallL = CreateMesh(
		geometries.plane,
		materials.MMStandardMaterial,
		{ posX: -3.5, posY: 5, posZ: 0 },
		{
			rotX: 0,
			rotY: Math.PI / 2,
			rotZ: 0,
		}
	);
	wallL.material.side = DoubleSide;
	wallL.material.transparent = true;
	wallL.material.roughness = 0;
	wallL.material.metalness = 0.8;

	const torus = CreateMesh(geometries.torus, materials.SIStandardMaterial);
	torus.material.roughness = 0.9;
	torus.material.metalness = 0.2;
	//torus.material.flatShading = true;

	const tetra = CreateMesh(geometries.tetra, materials.GPStandardMaterial);
	tetra.material.roughness = 0.4;
	tetra.material.metalness = 0.6;
	tetra.material.flatShading = true;
	tetra.position.y = 2;

	const pointSphere = CreatePoints(
		geometries.sphere,
		materials.pointsMaterial
	);

	const mirrorBox = new Reflector(new PlaneBufferGeometry(2, 2), {
		color: "red",
	});
	mirrorBox.position.set(3, 2, -5);
	mirrorBox.scale.set(4, 4);

	return { floor, wallL, torus, tetra, pointSphere, mirrorBox };
}
