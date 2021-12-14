import { WebGLRenderer } from "three";
import ResizeRenderer from "./ResizeRenderer";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
import { AfterimagePass } from "three/examples/jsm/postprocessing/AfterimagePass.js";
import { FXAAShader } from "three/examples/jsm/shaders/FXAAShader.js";

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

	const composer = new EffectComposer(renderer);
	composer.addPass(new RenderPass(scene, camera));

	const fxaaPass = new ShaderPass(FXAAShader);
	composer.addPass(fxaaPass);

	const unrealBloomPass = new UnrealBloomPass({}, 0.2, 1, 0.4);
	unrealBloomPass.renderToScreen = true;
	composer.addPass(unrealBloomPass);

	function render(time) {
		time *= 0.001;

		lights.directional.position.x = Math.sin(time) * 2;
		lights.directional.position.z = Math.cos(time) * 2;

		objects.torus.rotation.x = time * 0.1;
		objects.torus.rotation.y = time * 0.1;
		objects.torus.material.displacementScale = audio.dataArray[40] / 10;

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
