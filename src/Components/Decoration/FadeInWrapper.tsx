import { useCurrentFrame, interpolate } from 'remotion';

const FadeInWrapper: React.FC<FadeInWrapperProps> = ({
	startFrame,
	duration,
	children,
}) => {
	const frame = useCurrentFrame();
	const opacity = interpolate(
		frame,
		[startFrame, startFrame + duration],
		[0, 1],
		{
			extrapolateRight: 'clamp',
		}
	);

	return <div style={{ opacity: opacity }}>{children}</div>;
};

interface FadeInWrapperProps {
	startFrame: number;
	duration: number;
	children: React.ReactNode;
}

export default FadeInWrapper;
