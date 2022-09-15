import { useCurrentFrame, interpolate, Easing } from 'remotion';
import { Gif } from '@remotion/gif';

interface FloatEmoji {
	source: string;
	position: 'left' | 'right' | 'top' | 'bottom';
	shift?: number;
	startFrame?: number;
	duration?: number;
	endPosition?: number;
}

const CreepInEmoji: React.FC<FloatEmoji> = ({
	source,
	position,
	shift = 50,
	startFrame = 0,
	duration = 30,
	endPosition = 0,
}) => {
	const frame = useCurrentFrame();
	const framePosition = interpolate(
		frame,
		[startFrame, startFrame + duration],
		[-20, endPosition],
		{
			easing: Easing.bezier(0.53, 0.27, 0.79, 0.47),
			extrapolateRight: 'clamp',
		}
	);
	// TODO: use springs?

	// shift styling based on X or Y axis
	const isVertical = position === 'left' || position === 'right';
	const imageStyles = {
		[isVertical ? 'top' : 'left']: `${shift}%`, // set position for absolute
		transform: `translate${isVertical ? 'Y' : 'X'}(-50%)`, // centers image of positioning
	};

	return (
		<Gif
			src={source}
			style={{
				position: 'absolute',
				[position]: `${framePosition}%`,
				...imageStyles,
			}}
			width={160}
			height={160}
			fit="contain"
		/>
	);
};

export default CreepInEmoji;
