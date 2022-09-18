import { AbsoluteFill, Sequence } from 'remotion';
import { interpolate, useCurrentFrame } from 'remotion';

interface SceneWrapperProps {
	startFrame: number;
	frameDuration: number;
	name?: string;
	fadeDuration?: number;
	children?: JSX.Element;
}

const SceneWrapper: React.FC<SceneWrapperProps> = ({
	startFrame,
	frameDuration,
	name,
	fadeDuration = 30,
	children,
}) => {
	const frame = useCurrentFrame();
	const endFrame = startFrame + frameDuration;

	const opacity = interpolate(
		frame,
		[startFrame, startFrame + fadeDuration, endFrame - fadeDuration, endFrame],
		[0, 1, 1, 0],
		{
			extrapolateRight: 'clamp',
		}
	);

	return (
		<Sequence name={name} from={startFrame} durationInFrames={frameDuration}>
			<AbsoluteFill className="items-center justify-center" style={{ opacity }}>
				{children}
			</AbsoluteFill>
		</Sequence>
	);
};
export default SceneWrapper;
