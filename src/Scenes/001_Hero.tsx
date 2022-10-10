import {
	AbsoluteFill,
	spring,
	useCurrentFrame,
	useVideoConfig,
	interpolate,
	Easing,
} from 'remotion';
import { Gif } from '@remotion/gif';
import lostbear from '../Assets/emoji/lostbear.gif';

const url =
	'https://cdn.vox-cdn.com/thumbor/_n1jODtU4MKAU6VJmMta_WK9BZA=/0x0:1920x1080/1200x675/filters:focal(807x387:1113x693)/cdn.vox-cdn.com/uploads/chorus_image/image/65650200/jbareham_191158_ply0958_decade_minecraft.0.jpg';

const Hero = () => {
	const { fps } = useVideoConfig();

	return (
		<>
			<Minecraft startFrame={fps * 5} />
			<Sidegames2 startFrame={fps * 2} />
		</>
	);
};

export default Hero;

const Sidegames2: React.FC<SlideProps> = ({ startFrame }) => {
	//duration 3s
	const { fps } = useVideoConfig();
	const frame = useCurrentFrame();

	const flipStart = startFrame;
	const flipDuration = fps * 1.5;
	const flip = interpolate(
		frame,
		[flipStart, flipStart + flipDuration],
		[0, 200],
		{
			easing: Easing.bezier(0.53, 0.04, 0.7, 0.18),
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);
	return (
		<AbsoluteFill
			style={{
				backgroundColor: 'var(--background-color)',
				transform: 'rotate3d(0, 0, 0, 0)',
				transformOrigin: '50% 0%',
			}}
		>
			<h1
				className="text-9xl leading-compact text-center tracking-tight"
				style={{
					fontFamily: "'Silkscreen', cursive",
					webkitTextStroke: '5px rgba(0,0,0,0.2)',
				}}
			>
				CHRISTIAN
				<br />
				MINECRAFT
				<br />
				DISCORD
			</h1>
		</AbsoluteFill>
	);
};

const Minecraft: React.FC<SlideProps> = ({ startFrame }) => {
	//duration 3s
	const { fps } = useVideoConfig();
	const frame = useCurrentFrame();

	// rotate
	const hingeStart = frame - startFrame;
	const hingeDuration = fps * 3.5;
	const hinge = spring({
		from: 0,
		to: 55,
		frame: hingeStart,
		fps,
		config: {
			mass: 0.5,
			damping: 5,
		},
		durationInFrames: hingeDuration,
	});

	// y-axis drop
	const dropStart = startFrame + fps * 1.5;
	const dropDuration = fps * 1.5;
	const drop = interpolate(
		frame,
		[dropStart, dropStart + dropDuration],
		[0, 200],
		{
			easing: Easing.bezier(0.53, 0.04, 0.7, 0.18),
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	return (
		<AbsoluteFill style={{ transform: `translate(0,${drop}%)` }}>
			<AbsoluteFill
				className="bg-cover bg-no-repeat bg-center"
				style={{
					backgroundImage: `url("${url}")`,
					transform: `rotate(${hinge}deg)`,
					transformOrigin: '30% 0%',
				}}
			>
				<div
					className="flex justify-center items-center h-full"
					style={{
						background:
							'linear-gradient(45deg, hsla(340, 65.9%, 16.8%, 0.8) 0%, hsla(41, 64.9%, 23.6%, 0.8) 100%)',
					}}
				>
					<h1
						className="text-9xl leading-compact text-center tracking-tight"
						style={{
							fontFamily: "'Silkscreen', cursive",
							webkitTextStroke: '5px rgba(0,0,0,0.2)',
						}}
					>
						CHRISTIAN
						<br />
						MINECRAFT
						<br />
						DISCORD
					</h1>
				</div>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};

/*
<div className="flex flex-nowrap gap-12">
	<Gif src={lostbear} width={160} height={160} />
	<h1 className="text-8xl leading-compact text-center">
		Hey
		<br />
		PBA
	</h1>
</div>
*/

interface SlideProps {
	startFrame: number;
}
