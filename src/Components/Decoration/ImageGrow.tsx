import {
	Img,
	Sequence,
	useCurrentFrame,
	useVideoConfig,
	spring,
} from 'remotion';
import { GameProps } from '../../Data/games';

interface ImageGrowProps {
	image: GameProps;
}

const ImageGrow: React.FC<ImageGrowProps> = ({ image }) => {
	const { dimensions, scale, source, position } = image;
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();

	const growth = spring({
		from: 0,
		to: 1,
		frame,
		fps,
		config: {
			stiffness: 100,
		},
		durationInFrames: 45,
	});

	return (
		<div
			style={{
				position: 'absolute',
				left: `${position.x}%`,
				top: `${position.y}%`,
				transform: 'translate(-50%, -50%)',
				width: dimensions.width * scale,
			}}
		>
			<Img
				style={{
					transform: `scale(${growth})`,
				}}
				src={source}
			/>
		</div>
	);
};

export default ImageGrow;
