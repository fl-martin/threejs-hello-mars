import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default function Orbit(camera, canvas) {
	const controls = new OrbitControls(camera, canvas);

	controls.listenToKeyEvents(window);
	controls.keyPanSpeed = 20;
	controls.enableDamping = true;
	controls.dampingFactor = 0.05;

	return controls;
}
