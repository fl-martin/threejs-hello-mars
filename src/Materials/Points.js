import { PointsMaterial } from "three";

export default function Points(color = "red", size = 0.2) {
	const material = new PointsMaterial({ color, size });

	return material;
}
