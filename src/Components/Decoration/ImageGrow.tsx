import { Img, useCurrentFrame, useVideoConfig, spring } from 'remotion';
import { Gif } from '@remotion/gif';
import { GameProps } from '../../Data/games';

interface ImageGrowProps {
	image: GameProps;
	gif?: boolean;
	rock?: boolean;
}

const ImageGrow: React.FC<ImageGrowProps> = ({ image, gif, rock }) => {
	const { dimensions, scale = 1, source, position } = image;
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();

	const rockRotation = Math.sin(frame / 10) * 8;

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

	const imageComponent = gif ? (
		<Gif
			style={{
				transform: `scale(${growth})`,
				width: dimensions.width * scale,
				height: dimensions.height * scale,
			}}
			src={source}
		/>
	) : (
		<Img
			style={{
				transform: `scale(${growth})`,
				width: dimensions.width * scale,
				height: dimensions.height * scale,
			}}
			src={source}
		/>
	);

	return (
		<div
			style={{
				position: 'absolute',
				left: `${position.x}%`,
				top: `${position.y}%`,
				transform: `translate(-50%, -50%) rotate(${
					rock ? rockRotation : 0
				}deg)`,
				width: dimensions.width * scale,
				height: dimensions.height * scale,
			}}
		>
			{imageComponent}
		</div>
	);
};

export default ImageGrow;
