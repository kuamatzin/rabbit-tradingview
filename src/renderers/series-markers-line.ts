import { Coordinate } from '../model/coordinate';

import { shapeSize } from './series-markers-utils';

export function drawLine(
	ctx: CanvasRenderingContext2D,
	centerX: Coordinate,
	color: string
): void {
	ctx.beginPath();
	ctx.setLineDash([5, 5]);
	// ctx.arc(centerX, centerY, halfSize, 0, 2 * Math.PI, false);

	// ctx.fill();
	ctx.moveTo(centerX, 20);
	ctx.lineTo(centerX, ctx.canvas.clientHeight - 20);
	ctx.lineWidth = 2;

	// set line color
	ctx.strokeStyle = color;
	ctx.stroke();
}

export function hitTestLine(
	centerX: Coordinate,
	centerY: Coordinate,
	size: number,
	x: Coordinate,
	y: Coordinate
): boolean {
	const circleSize = shapeSize('circle', size);
	const tolerance = 2 + circleSize / 2;

	const xOffset = centerX - x;
	const yOffset = centerY - y;

	const dist = Math.sqrt(xOffset * xOffset + yOffset * yOffset);

	return dist <= tolerance;
}
