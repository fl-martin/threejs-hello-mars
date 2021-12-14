import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
import { AfterimagePass } from "three/examples/jsm/postprocessing/AfterimagePass.js";
import { FXAAShader } from "three/examples/jsm/shaders/FXAAShader.js";

export default function Composer(scene, camera, renderer) {
	const composer = new EffectComposer(renderer);
	composer.addPass(new RenderPass(scene, camera));

	const fxaaPass = new ShaderPass(FXAAShader);
	composer.addPass(fxaaPass);

	const unrealBloomPass = new UnrealBloomPass({}, 0.2, 1, 0.4);
	unrealBloomPass.renderToScreen = true;
	composer.addPass(unrealBloomPass);

	return composer;
}
