import { useCurrentFrame, Img, interpolate, Easing, random } from 'remotion';
import { FRAME_PER_SECOND } from '../../utils';
import baloonClipart from '../../Assets/image/balloonClipart.png';

interface BalloonProps {
	startFrame: number;
	left: string;
}

const baseDuration = FRAME_PER_SECOND * 2;

const Balloon: React.FC<BalloonProps> = ({ startFrame, left }) => {
	const frame = useCurrentFrame();
	const balloonDuration = baseDuration + random(FRAME_PER_SECOND);

	const bottom = interpolate(
		frame,
		[startFrame, startFrame + balloonDuration],
		[-10, 110],
		{
			easing: Easing.bezier(0.56, 0.28, 0.87, 0.63),
			extrapolateRight: 'clamp',
		}
	);

	return (
		<Img
			src={baloonClipart}
			height={100}
			width={50}
			style={{
				position: 'absolute',
				bottom: `${bottom}%`,
				left: left,
			}}
		/>
	);
};

export default Balloon;
