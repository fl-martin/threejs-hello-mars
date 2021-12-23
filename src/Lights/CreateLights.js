import { AmbientLight, DirectionalLight } from "three";

export default function CreateLights(scene) {
	const directional = new DirectionalLight(0xffffff, 1);
	directional.position.set(-1, 2, 4);

	const directional2 = new DirectionalLight(0xffffff, 0.5);
	directional.position.set(0, 0, 10);

	const ambient = new AmbientLight(0xffffff, 0.4);

	return { directional, directional2, ambient };
}
