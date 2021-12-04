import { Points } from "three";

export default function CreatePoints(
	geometry,
	material,
	{ posX, posY, posZ } = { posX: 0, posY: 0, posZ: 0 },
	{ rotX, rotY, rotZ } = { rotX: 0, rotY: 0, rotZ: 0 }
) {
	const mesh = new Points(geometry, material);

	mesh.position.set(posX, posY, posZ);
	mesh.rotation.set(rotX, rotY, rotZ);

	return mesh;
}
