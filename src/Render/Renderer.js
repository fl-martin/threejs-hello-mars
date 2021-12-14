import { WebGLRenderer } from "three";
import Composer from "./Composer";
import ResizeRenderer from "./ResizeRenderer";

export default function Renderer(
	scene,
	canvas,
	camera,
	controls,
	objects,
	lights,
	audio
) {
	const renderer = new WebGLRenderer({ canvas, antialias: true });
	const pixelRatio = window.devicePixelRatio;

	const composer = Composer(scene, camera, renderer);

	function render(time) {
		time *= 0.001;

		lights.directional.position.x = Math.sin(time) * 2;
		lights.directional.position.z = Math.cos(time) * 2;

		objects.torus.rotation.x = time * 0.05;
		objects.torus.rotation.y = time * 0.05;
		//	objects.torus.material.displacementScale = audio.dataArray[40] / 10;

		objects.wallL.position.y = Math.sin(time * 0.1) * 1.2 + 1.6;

		objects.mirrorBox.rotation.y = Math.sin(time * 0.2) * 0.4 - 0.7;

		if (ResizeRenderer(canvas, pixelRatio, renderer)) {
			camera.aspect = canvas.clientWidth / canvas.clientHeight;
			camera.updateProjectionMatrix();
			composer.setSize(canvas.width, canvas.height);
		}

		controls.update();

		composer.render(scene, camera);

		requestAnimationFrame(render);
	}
	requestAnimationFrame(render);

	return renderer;
}
