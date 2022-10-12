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
			<Popobear startFrame={fps * 9.5} />
			<Minecraft startFrame={fps * 6} />
			<Sidegames2 startFrame={fps * 2} />
		</>
	);
};
/*<Sidegames2 startFrame={fps * 2} />*/

export default Hero;

const Sidegames2: React.FC<SlideProps> = ({ startFrame }) => {
	//duration 3s
	const { fps } = useVideoConfig();
	const frame = useCurrentFrame();

	const scaleStart = startFrame;
	const scaleDuration = fps * 0.75;
	const scale = interpolate(
		frame,
		[scaleStart, scaleStart + scaleDuration],
		[1, 0.7],
		{
			easing: Easing.bezier(0.53, 0.04, 0.7, 0.18),
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	const rotateSwipeStart = startFrame + scaleDuration + fps / 2;
	const rotateSwipeDuration = fps;
	const frameKeynotes = [
		rotateSwipeStart,
		rotateSwipeStart + rotateSwipeDuration / 5,
		rotateSwipeStart + 2 * (rotateSwipeDuration / 5),
		rotateSwipeStart + rotateSwipeDuration,
	];
	const rotate = interpolate(frame, frameKeynotes, [0, -0.5, -0.5, -15], {
		easing: Easing.bezier(0.53, 0.04, 0.7, 0.18),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const swipe = interpolate(frame, frameKeynotes, [0, -1, -1, -30], {
		easing: Easing.bezier(0.17, 0.67, 0.83, 0.67),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<AbsoluteFill
			style={{
				backgroundColor: 'var(--background-color)',
				transform: `scale(${scale}) rotate(${rotate}deg) translate(${
					swipe * 5
				}%,${swipe * 2}%)`,
				transformOrigin: '50% 50%',
			}}
		>
			<div className="flex justify-center items-center h-full">
				<h1
					className="text-9xl leading-compact text-center tracking-tight"
					style={{ fontFamily: "'Josefin Sans', sans-serif" }}
				>
					Sidegames2
				</h1>
			</div>
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

const Popobear: React.FC<SlideProps> = ({ startFrame }) => {
	//duration 3s
	const { fps } = useVideoConfig();
	const frame = useCurrentFrame();

	// rotate
	const rotationStart = frame - startFrame;
	const rotationDuration = fps * 3;
	const rotation = spring({
		from: 180,
		to: 0,
		frame: rotationStart,
		fps,
		config: {
			mass: 0.5,
			damping: 5,
		},
		durationInFrames: rotationDuration,
	});

	return (
		<AbsoluteFill
			className="flex flex-nowrap justify-center items-center"
			style={{
				transform: `rotate(${rotation}deg)`,
				transformOrigin: '50% 50%',
			}}
		>
			<div className="flex flex-nowrap gap-20">
				<Gif src={lostbear} width={250} height={250} />
				<h1
					className="text-8xl leading-compact text-left"
					style={{ fontFamily: "'Kanit', sans-serif" }}
				>
					<span className="text-sky-500 underline decoration-8 decoration-sky-500">
						Popo
					</span>{' '}
					<span className="text-rose-500 underline decoration-8 decoration-rose-500">
						Bear
					</span>
					<br />
					<span className="underline decoration-8 decoration-white">
						Appreciation
					</span>
					<br />
					Club
				</h1>
			</div>
		</AbsoluteFill>
	);
};

interface SlideProps {
	startFrame: number;
}
