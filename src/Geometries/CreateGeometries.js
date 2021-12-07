import { BoxGeometry, PlaneGeometry, SphereGeometry } from "three";

export default function CreateGeometries() {
	const plane = new PlaneGeometry(7, 7, 512, 512);

	const box = new BoxGeometry(2, 2, 2);

	const sphere = new SphereGeometry(3, 100, 20);

	return { plane, box, sphere };
}
