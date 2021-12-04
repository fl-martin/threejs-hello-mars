import { BoxGeometry } from "three";

export default function Box(width = 1, height = 1, depth = 1) {
	const geometry = new BoxGeometry(width, height, depth);

	return geometry;
}
