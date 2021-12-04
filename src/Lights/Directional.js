import { DirectionalLight } from "three";

export default function Directional() {
	const color = 0xffffff;
	const intensity = 1;

	const light = new DirectionalLight(color, intensity);
	light.position.set(-1, 2, 4);

	return light;
}
