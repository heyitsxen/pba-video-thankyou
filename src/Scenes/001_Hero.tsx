import {
	AbsoluteFill,
	spring,
	useCurrentFrame,
	useVideoConfig,
	interpolate,
	Easing,
	Img,
} from 'remotion';
import { Gif } from '@remotion/gif';
import { lostbear } from '../Assets/emoji';
import pointer from '../Assets/image/pointer.svg';
import kirakira_ghost from '../Assets/image/kirakira ghost.gif';

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

export default Hero;

const Sidegames2: React.FC<SlideProps> = ({ startFrame }) => {
	const { fps } = useVideoConfig();
	const frame = useCurrentFrame();

	const scaleStart = startFrame;
	const scaleDuration = fps * 0.75;
	const scaleFrameKeynotes = [scaleStart, scaleStart + scaleDuration];
	const scale = interpolate(frame, scaleFrameKeynotes, [1, 0.7], {
		easing: Easing.bezier(0.17, 0.67, 0.59, 0.8), // TODO: adjust easing
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const perspective = interpolate(
		frame,
		scaleFrameKeynotes,
		[0, 100],
		interpolateSettings({
			easing: Easing.bezier(0.17, 0.67, 0.59, 0.8),
		})
	);
	const skew = interpolate(
		frame,
		scaleFrameKeynotes,
		[0, 25],
		interpolateSettings({
			easing: Easing.bezier(0.17, 0.67, 0.59, 0.8),
		})
	);

	const rotateSwipeStart = startFrame + scaleDuration + fps / 2;
	const rotateSwipeDuration = fps;
	const frameKeynotes = [
		rotateSwipeStart,
		rotateSwipeStart + rotateSwipeDuration / 5,
		rotateSwipeStart + 1.5 * (rotateSwipeDuration / 5),
		rotateSwipeStart + rotateSwipeDuration,
	];
	const rotate = interpolate(
		frame,
		frameKeynotes,
		[0, -0.5, -0.5, -15],
		interpolateSettings({
			easing: Easing.bezier(0.53, 0.04, 0.7, 0.18),
		})
	);
	const swipe = interpolate(
		frame,
		frameKeynotes,
		[0, -1, -1, -30],
		interpolateSettings({
			easing: Easing.bezier(0.17, 0.67, 0.83, 0.67),
		})
	);

	const pointerStart = startFrame;
	const pointerFrameKeynotes = [
		pointerStart,
		scaleStart + scaleDuration,
		rotateSwipeStart,
		rotateSwipeStart + 1.5 * (rotateSwipeDuration / 5),
		rotateSwipeStart + 2 * (rotateSwipeDuration / 5),
	];
	const pointerTop = interpolate(
		frame,
		pointerFrameKeynotes,
		[90, 60, 60, 58, 53],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);
	const pointerLeft = interpolate(
		frame,
		pointerFrameKeynotes,
		[50, 47, 47, 45, 40],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);
	const pointerTransparency = interpolate(
		frame,
		pointerFrameKeynotes.slice(-2).map((frame) => frame + fps / 2),
		[1, 0],
		{
			easing: Easing.bezier(0.17, 0.67, 0.83, 0.67),
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	return (
		<>
			<AbsoluteFill
				style={{
					perspective: perspective ? `${perspective}rem` : 'none',
				}}
			>
				<AbsoluteFill
					id="container"
					style={{
						transform: `
							scale(${scale})
							rotate(${rotate}deg)
							translate(${swipe * 5}%,${swipe * 2}%)
							rotateX(${skew}deg)
						`,
						boxShadow:
							'6.7px 6.7px 4.8px rgba(0, 0, 0, 0.044), 13.4px 13.4px 11.5px rgba(0, 0, 0, 0.064), 21.1px 21.1px 21.7px rgba(0, 0, 0, 0.072), 31.4px 31.4px 38.6px rgba(0, 0, 0, 0.081), 49.2px 49.2px 72.3px rgba(0, 0, 0, 0.102), 100px 100px 173px rgba(0, 0, 0, 0.15)',
						transformOrigin: '50% 50%',
					}}
				>
					<div className="flex flex-col justify-center items-center h-full">
						<h1
							className="text-9xl leading-compact text-center tracking-tight text-purple-400 tracking-widest leading-normal"
							style={{
								fontFamily: "'Rock Salt', cursive",
								fontWeight: 'bolder',
							}}
						>
							Sidegames2
						</h1>
						<Gif src={kirakira_ghost} height={200} width={300} />
					</div>
				</AbsoluteFill>
			</AbsoluteFill>
			<Img
				style={{
					position: 'absolute',
					left: `${pointerLeft}%`,
					top: `${pointerTop}%`,
					transform: 'translate(50%, 50%) rotate(-25deg)',
					opacity: pointerTransparency,
				}}
				src={pointer}
				height={150}
				width={150}
			/>
		</>
	);
};

const Minecraft: React.FC<SlideProps> = ({ startFrame }) => {
	const { fps } = useVideoConfig();
	const frame = useCurrentFrame();

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
							WebkitTextStroke: '5px rgba(0,0,0,0.2)',
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
	const { fps } = useVideoConfig();
	const frame = useCurrentFrame();

	const rotationStart = frame - startFrame;
	const rotationDuration = fps * 3;
	const rotation = spring({
		from: 180,
		to: 0,
		frame: rotationStart,
		fps,
		config: {
			// TODO: adjust spring settings
			mass: 0.5,
			damping: 5,
		},
		durationInFrames: rotationDuration,
	});

	return (
		<AbsoluteFill className="flex flex-nowrap justify-center items-center">
			<div className="flex flex-nowrap gap-20">
				<Gif
					src={lostbear}
					width={250}
					height={250}
					style={{
						transform: `rotate(${rotation}deg)`,
						transformOrigin: '50% 50%',
					}}
				/>
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

//Interpolate
type ExtrapolateType = 'extend' | 'identity' | 'clamp';
interface InterpolateOptions {
	easing?: (input: number) => number;
	extrapolateLeft?: ExtrapolateType;
	extrapolateRight?: ExtrapolateType;
}
const interpolateSettings = (params = {}): InterpolateOptions => ({
	extrapolateLeft: 'clamp',
	extrapolateRight: 'clamp',
	...params,
});
