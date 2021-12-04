import Box from "./Geometries/Box";
import PerspectiveCam from "./Cameras/Perspective";
import Mesh from "./Objects/Mesh";
import DirectionalLight from "./Lights/Directional";
import SurfaceImperfection from "./Textures/SurfaceImperfection";
import MeshPhong from "./Materials/MeshPhong";
import Renderer from "./Renderer";
import { Scene } from "three";
import Plane from "./Geometries/Plane";
import Orbit from "./Cameras/OrbitControl";
import Sphere from "./Geometries/Sphere";
import Points from "./Materials/Points";
import CreatePoints from "./Objects/Points";
import MeshStandard from "./Materials/MeshStandard";
import MetalMesh from "./Textures/MetalMesh";

(function main() {
	const canvas = document.querySelector("#canvas1");

	const scene = new Scene();

	const camera = PerspectiveCam();
	const controls = Orbit(camera, canvas);

	const directionalLigth = DirectionalLight();

	const box = Box(2, 2, 2);
	const plane = Plane(7, 7);
	const sphere = Sphere(3, 100, 20);

	const SItextures = SurfaceImperfection();
	const MMtextures = MetalMesh();

	const meshPhongMaterial = MeshPhong(0x44aa88);
	const SIStandardMaterial = MeshStandard("red", SItextures);
	const MMStandardMaterial = MeshStandard("", MMtextures);

	const pointsMaterial = Points("blue", 0.04);

	const objects = {};

	objects.floor = Mesh(
		plane,
		SIStandardMaterial,
		{ posX: 0, posY: -3, posZ: 0 },
		{
			rotX: Math.PI / -2,
			rotY: 0,
			rotZ: 0,
		}
	);
	objects.wallL = Mesh(
		plane,
		SIStandardMaterial,
		{ posX: -3.5, posY: 0.5, posZ: 0 },
		{
			rotX: 0,
			rotY: Math.PI / -2,
			rotZ: 0,
		}
	);
	objects.wallC = Mesh(
		plane,
		SIStandardMaterial,
		{ posX: 0, posY: 0.5, posZ: -3.5 },
		{
			rotX: 0,
			rotY: 0,
			rotZ: 0,
		}
	);
	objects.cube = Mesh(box, MMStandardMaterial);
	objects.pointSphere = CreatePoints(sphere, pointsMaterial);

	objects.pointSphere.add(objects.cube);

	scene.add(
		objects.floor,
		objects.wallL,
		objects.wallC,
		objects.cube,
		directionalLigth
	);

	const renderer = Renderer(
		scene,
		canvas,
		camera,
		controls,
		objects,
		directionalLigth
	);
})();
