import { RepeatWrapping } from "three";

export default function RepeatTextures(textures, n) {
	for (const text in textures) {
		textures[text].wrapS = textures[text].wrapT = RepeatWrapping;
		textures[text].repeat.set(n, n);
	}
}
