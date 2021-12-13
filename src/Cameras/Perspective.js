import { PerspectiveCamera } from "three";

export default function PerspectiveCam() {
	const fov = 55;
	const aspect = 2;
	const near = 0.1;
	const far = 50;
	const camera = new PerspectiveCamera(fov, aspect, near, far);
	camera.position.z = 20;

	return camera;
}
