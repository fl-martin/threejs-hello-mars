import { AmbientLight, DirectionalLight } from "three";

export default function CreateLights(scene) {
	const directional = new DirectionalLight(0xffffff, 1);
	directional.position.set(-1, 2, 4);

	const ambient = new AmbientLight(0xffffff, 0.3);

	return { directional, ambient };
}
