import { DoubleSide } from "three";
import CreateMesh from "./Mesh";
import CreatePoints from "./Points";

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
	floor.scale.set(10, 10, 1);
	floor.material.roughness = 5;
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

	const sphere = CreateMesh(geometries.sphere, materials.SIStandardMaterial);
	sphere.material.roughness = 10;
	sphere.material.side = DoubleSide;

	const pointSphere = CreatePoints(
		geometries.sphere,
		materials.pointsMaterial
	);

	return { floor, wallL, sphere, pointSphere };
}
