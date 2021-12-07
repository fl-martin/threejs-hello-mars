import CreateMesh from "./Mesh";
import CreatePoints from "./Points";

export default function CreateObjects(geometries, materials) {
	const floor = CreateMesh(
		geometries.plane,
		materials.MMStandardMaterial,
		{ posX: 0, posY: -3, posZ: 0 },
		{
			rotX: Math.PI / -2,
			rotY: 0,
			rotZ: 0,
		}
	);
	const wallL = CreateMesh(
		geometries.plane,
		materials.MMStandardMaterial,
		{ posX: -3.5, posY: 0.5, posZ: 0 },
		{
			rotX: 0,
			rotY: Math.PI / 2,
			rotZ: 0,
		}
	);
	const wallC = CreateMesh(
		geometries.plane,
		materials.MMStandardMaterial,
		{ posX: 0, posY: 0.5, posZ: -3.5 },
		{
			rotX: 0,
			rotY: 0,
			rotZ: 0,
		}
	);
	wallC.material.displacementScale = 0.1;

	const cube = CreateMesh(geometries.box, materials.SIStandardMaterial);

	const pointSphere = CreatePoints(
		geometries.sphere,
		materials.pointsMaterial
	);
	pointSphere.add(cube);

	return { floor, wallC, wallL, cube, pointSphere };
}
