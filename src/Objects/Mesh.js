import { Mesh } from "three";

export default function CreateMesh(
	geometry,
	material,
	{ posX, posY, posZ } = { posX: 0, posY: 0, posZ: 0 },
	{ rotX, rotY, rotZ } = { rotX: 0, rotY: 0, rotZ: 0 }
) {
	const mesh = new Mesh(geometry, material);
	mesh.geometry.attributes.uv2 = mesh.geometry.attributes.uv;

	mesh.position.set(posX, posY, posZ);
	mesh.rotation.set(rotX, rotY, rotZ);

	return mesh;
}
