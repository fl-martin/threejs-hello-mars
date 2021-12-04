import { PlaneGeometry } from "three";

export default function Plane(width = 1, height = 1) {
	const geometry = new PlaneGeometry(width, height, 512, 512);

	return geometry;
}
