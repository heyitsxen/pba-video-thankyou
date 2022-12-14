import { useCurrentFrame, interpolate, Easing, Img } from 'remotion';
import { Gif } from '@remotion/gif';

// TODO: Check theses
const fastSlow = Easing.bezier(0, 0, 0.6, 1);
const slowFast = Easing.bezier(0, 0.6, 1, 1);

interface Position {
	x: number;
	y: number;
	rotation: number;
}

interface FloatEmoji {
	source: string;
	startPosition: Position;
	endPosition: Position;
	startFrame?: number;
	duration?: number;
	clockwise?: boolean;
	img?: boolean; // TODO: refactor to gif
}

const SwingInEmoji: React.FC<FloatEmoji> = ({
	source,
	startPosition,
	endPosition,
	startFrame = 0,
	duration = 30,
	clockwise = true,
	img = false,
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

	const imageComponent = img ? (
		<Img
			src={source}
			style={{ transform: `rotate(${rotation}deg)` }}
			width={160}
			height={160}
			fit="contain"
		/>
	) : (
		<Gif
			src={source}
			style={{ transform: `rotate(${rotation}deg)` }}
			width={160}
			height={160}
			fit="contain"
		/>
	);

	return (
		<div
			style={{
				position: 'absolute',
				left: `${xPosition}%`,
				top: `${yPosition}%`,
				transform: `translate(-50%, -50%)`,
			}}
		>
			{imageComponent}
		</div>
	);
};

export default SwingInEmoji;
