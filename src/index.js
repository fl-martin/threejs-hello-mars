import PerspectiveCam from "./Cameras/Perspective";
import Renderer from "./Render/Renderer";
import { Color, Scene } from "three";
import Orbit from "./Cameras/OrbitControl";
import webAudio from "./Media/webAudio";
import getMedia from "./Media/getMedia";
import CreateLights from "./Lights/CreateLights";
import CreateGeometries from "./Geometries/CreateGeometries";
import CreateTextures from "./Textures/CreateTextures";
import CreateMaterials from "./Materials/CreateMaterials";
import CreateObjects from "./Objects/CreateObjects";

(async function main() {
	const canvas = document.querySelector("#canvas1");

	const media = await getMedia();
	const audio = webAudio(media);

	const scene = new Scene();
	scene.background = new Color(0xfeeff2);

	const camera = PerspectiveCam();
	const controls = Orbit(camera, canvas);

	const { directional, ambient } = CreateLights(scene);
	scene.add(directional, ambient);

	const geometries = CreateGeometries();

	const textures = CreateTextures();

	const materials = CreateMaterials(textures);

	const objects = CreateObjects(geometries, materials);

	scene.add(objects.floor, objects.wallL, objects.wallC, objects.cube);

	const renderer = Renderer(
		scene,
		canvas,
		camera,
		controls,
		objects,
		directional,
		audio
	);
})();
