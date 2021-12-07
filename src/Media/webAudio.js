export default function webAudio(mediaStream) {
	const audioCtx = new AudioContext();

	const audio = audioCtx.createMediaStreamSource(mediaStream);

	const gainNode = audioCtx.createGain();
	const filterNode = audioCtx.createBiquadFilter();

	const analyser = audioCtx.createAnalyser();
	analyser.fftSize = 512;
	analyser.smoothingTimeConstant = 0.8;

	audio.connect(gainNode);
	gainNode.value = 1;
	gainNode.connect(filterNode);
	gainNode.connect(analyser);
	//filterNode.connect(audioCtx.destination);

	const dataArray = new Uint8Array(analyser.frequencyBinCount);

	(function startAnalyser() {
		requestAnimationFrame(startAnalyser);
		analyser.getByteFrequencyData(dataArray);
	})();

	function start() {
		audioCtx.resume();
		audio.play();
	}

	function filterFrequency(value) {
		filterNode.frequency.value = value;
	}

	return { start, filterFrequency, dataArray };
}
