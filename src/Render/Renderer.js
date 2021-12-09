import { WebGLRenderer } from "three";
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
	const renderer = new WebGLRenderer({ canvas });
	const pixelRatio = window.devicePixelRatio;

	function render(time) {
		time *= 0.001;

		lights.directional.position.x = Math.sin(time) * 2;
		lights.directional.position.z = Math.cos(time) * 2;

		objects.sphere.rotation.x = time * 0.1;
		objects.sphere.rotation.y = time * 0.1;

		objects.pointSphere.rotation.y = time;
		objects.pointSphere.rotation.z = Math.sin(time) * 0.1;

		objects.sphere.material.displacementScale = audio.dataArray[40] / 10;

		if (ResizeRenderer(canvas, pixelRatio, renderer)) {
			camera.aspect = canvas.clientWidth / canvas.clientHeight;
			camera.updateProjectionMatrix();
		}

		controls.update();

		renderer.render(scene, camera);

		requestAnimationFrame(render);
	}
	requestAnimationFrame(render);

	return renderer;
}
