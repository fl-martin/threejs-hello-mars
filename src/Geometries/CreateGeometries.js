import {
	BoxGeometry,
	PlaneGeometry,
	TetrahedronGeometry,
	TorusKnotGeometry,
} from "three";

export default function CreateGeometries() {
	const plane = new PlaneGeometry(7, 7, 512, 512);

	const box = new BoxGeometry(2, 2, 2);

	const tetra = new TetrahedronGeometry(2.3, 5);

	const radius = 35; // ui: radius
	const tubeRadius = 0.4; // ui: tubeRadius
	const radialSegments = 8; // ui: radialSegments
	const tubularSegments = 64; // ui: tubularSegments
	const p = 20; // ui: p
	const q = 35; // ui: q
	const torus = new TorusKnotGeometry(
		radius,
		tubeRadius,
		tubularSegments,
		radialSegments,
		p,
		q
	);

	return { plane, box, tetra, torus };
}
