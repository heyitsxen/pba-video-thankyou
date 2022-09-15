import { useCurrentFrame, interpolate, Easing } from 'remotion';
import { Gif } from '@remotion/gif';

// TODO: Check theses
const fastSlow = Easing.bezier(0, 0, 0.6, 1);
const slowFast = Easing.bezier(0, 0.6, 1, 1);

interface Position {
	x: number;
	y: number;
	rotation: number;
}

interface FloatText {
	startPosition: Position;
	endPosition: Position;
	startFrame?: number;
	duration?: number;
	clockwise?: boolean;
	textClasses?: string;
	children: React.ReactNode;
}

const SwingInText: React.FC<FloatText> = ({
	startPosition,
	endPosition,
	startFrame = 0,
	duration = 30,
	clockwise = true,
	textClasses = '',
	children,
}) => {
	const frame = useCurrentFrame();
	const xPosition = interpolate(
		frame,
		[startFrame, startFrame + duration],
		[startPosition.x, endPosition.x],
		{
			easing: clockwise ? fastSlow : slowFast,
			extrapolateRight: 'clamp',
		}
	);
	const yPosition = interpolate(
		frame,
		[startFrame, startFrame + duration],
		[startPosition.y, endPosition.y],
		{
			easing: clockwise ? slowFast : fastSlow,
			extrapolateRight: 'clamp',
		}
	);
	const rotation = interpolate(
		frame,
		[startFrame, startFrame + duration],
		[startPosition.rotation, endPosition.rotation],
		{
			easing: fastSlow,
			extrapolateRight: 'clamp',
		}
	);

	return (
		<div
			className={textClasses}
			style={{
				position: 'absolute',
				left: `${xPosition}%`,
				top: `${yPosition}%`,
				transform: `translate(-50%, -50%)`,
			}}
		>
			<p style={{ transform: `rotate(${rotation}deg)` }}>{children}</p>
		</div>
	);
};

export default SwingInText;
