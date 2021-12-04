export default function ResizeRenderer(canvas, pixelRatio, renderer) {
	if (
		(canvas.width !== canvas.clientWidth * pixelRatio) | 0 ||
		(canvas.height !== canvas.clientHeight * pixelRatio) | 0
	) {
		renderer.setSize(
			(canvas.clientWidth * pixelRatio) | 0,
			(canvas.clientHeight * pixelRatio) | 0,
			false
		);
		return true;
	}

	return false;
}
