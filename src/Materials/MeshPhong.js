import { MeshPhongMaterial } from "three";

export default function MeshPhong(color) {
	const material = new MeshPhongMaterial({ color: color });

	return material;
}
