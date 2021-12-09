import PerspectiveCam from "./Cameras/Perspective";
import Renderer from "./Render/Renderer";
import { Color, Fog, Scene } from "three";
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
	scene.background = new Color(0xffd6fc);
	scene.fog = new Fog(new Color(0xffd6fc), 8, 40);

	const camera = PerspectiveCam();
	const controls = Orbit(camera, canvas);

	const lights = CreateLights(scene);

	const geometries = CreateGeometries();

	const textures = CreateTextures();

	const materials = CreateMaterials(textures);

	const objects = CreateObjects(geometries, materials);

	scene.add(
		lights.directional,
		lights.ambient,
		objects.floor,
		objects.sphere,
		objects.wallL
	);

	const renderer = Renderer(
		scene,
		canvas,
		camera,
		controls,
		objects,
		lights,
		audio
	);
})();
