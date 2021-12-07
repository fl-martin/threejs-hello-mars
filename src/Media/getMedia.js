export default async function getMedia(size) {
	if (!navigator.mediaDevices) return;

	const userInputs = await navigator.mediaDevices
		.getUserMedia({
			audio: true,
			video: false,
		})
		.then((mediaStream) => {
			return mediaStream;
		});

	return userInputs;
}
