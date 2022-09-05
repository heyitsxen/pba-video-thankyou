import { Loop, useCurrentFrame, interpolate, Easing, random } from 'remotion';
import { FRAME_PER_SECOND } from '../../utils';

// Yellow, Blue, Pink
const confettiColors = ['#ffd300', '#17d3ff', '#ff4e91'];
const xOffsetScale = 10;

const Confetti: React.FC = () => {
	const confettiArray = new Array(25).fill(true).map((a, i) => {
		return {
			startFrame: Math.floor((random(`seed-startFrame-${i}`) * 90) / 2),
			duration: FRAME_PER_SECOND / 2 + Math.floor(random(`seed-${i}`) * 60),
			color: confettiColors[i % confettiColors.length],
			leftPos: i * 5,
			offset: random(`offset-${i}`) * xOffsetScale - xOffsetScale / 2,
		};
	});

	return (
		<div>
			{confettiArray.map((data, idx) => (
				<Loop key={idx} durationInFrames={data.startFrame + data.duration}>
					<Piece
						startFrame={data.startFrame}
						duration={data.duration}
						color={data.color}
						leftPos={data.leftPos}
						offset={data.offset}
					/>
				</Loop>
			))}
		</div>
	);
};

export default Confetti;

interface PieceProps {
	startFrame: number;
	duration: number;
	color: string;
	leftPos: number;
	offset: number;
}

// startFrame is for positioning delay (like css)

const Piece: React.FC<PieceProps> = ({
	startFrame,
	duration,
	color,
	leftPos,
	offset,
}) => {
	const frame = useCurrentFrame();
	const endFrame = startFrame + duration;

	// positioning
	const height = interpolate(frame, [startFrame, endFrame], [-5, 100], {
		easing: Easing.bezier(0.46, 0.54, 0.5, 0.68),
	});
	const xOffset = interpolate(frame, [startFrame, endFrame], [0, offset]);

	// settings
	const opacity = interpolate(
		frame,
		[startFrame, startFrame + duration * 0.5, endFrame],
		[1, 1, 0]
	);
	const rotation = interpolate(
		frame,
		[startFrame, startFrame + duration / 2, endFrame],
		[0, 180, 360]
	);

	return (
		<div
			style={{
				position: 'absolute',
				top: `${height}%`,
				left: `${leftPos + xOffset}%`,
				backgroundColor: color,
				opacity: opacity,
				width: '10px',
				height: '40px',
				transform: `rotate(${rotation}deg)`,
			}}
		/>
	);
};
