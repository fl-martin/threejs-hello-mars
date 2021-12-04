import { WebGLRenderer } from "three";
import ResizeRenderer from "./ResizeRenderer";

export default function Renderer(
	scene,
	canvas,
	camera,
	controls,
	objects,
	directionalLigth
) {
	const renderer = new WebGLRenderer({ canvas });
	const pixelRatio = window.devicePixelRatio;

	function render(time) {
		time *= 0.001;

		directionalLigth.position.x = Math.sin(time) * 2;
		directionalLigth.position.z = Math.cos(time) * 2;

		objects.cube.rotation.x = time;
		objects.cube.rotation.y = time;

		objects.pointSphere.rotation.y = time;
		objects.pointSphere.rotation.z = Math.sin(time) * 0.1;

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
