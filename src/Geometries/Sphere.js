import { SphereGeometry } from "three";

export default function Sphere(
	radius = 7,
	widthSegments = 12,
	heightSegments = 8
) {
	const geometry = new SphereGeometry(radius, widthSegments, heightSegments);

	return geometry;
}
