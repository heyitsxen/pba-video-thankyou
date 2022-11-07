import { AbsoluteFill, Composition, useCurrentFrame } from 'remotion';
import { Gif } from '@remotion/gif';
import { popobear, kawaibear, sadbear, gotembear } from './Assets/emoji';

const FPS = 50; // remotion export gif capped at 50

// BEAR EMOJI PARAMETERS: Do not touch, or do I don't pay your sub
const BEAR_FRAMES = 12;
const BEAR_FRAME_DURATION = 0.02;
const BEAR_GIF_DURATION_IN_SECONDS = BEAR_FRAMES * BEAR_FRAME_DURATION; // 0.24 of a second
const BEAR_GIF_DURATION_FPS = FPS * BEAR_GIF_DURATION_IN_SECONDS;

// Composition settings
const LOOPS = 20;
const durationInFrames = LOOPS * BEAR_GIF_DURATION_FPS;

export const Banner = () => {
	return (
		<Composition
			id="banner"
			component={Container}
			durationInFrames={durationInFrames} //72
			fps={FPS}
			width={680}
			height={240}
		/>
	);
};

export const Container = () => {
	const rows = 4;
	const beginRows = -2;
	const columns = 5;
	const beginColumns = -3;

	return (
		<AbsoluteFill style={{ backgroundColor: '#36393f' }}>
			{[...Array(rows).keys()].map((y) => {
				let ypos = (beginRows + y) * tileDimension;
				return (
					<>
						{[...Array(columns).keys()].map((x) => {
							let xpos = (beginColumns + x) * tileDimension;
							return <Tile x={xpos} y={ypos} />;
						})}
					</>
				);
			})}
		</AbsoluteFill>
	);
};

const emojiWidth = 160;
const gap = 32;
const tileDimension = emojiWidth * 2 + gap * 2;
const emojis = [kawaibear, popobear, popobear, kawaibear];

interface TileProps {
	x: number;
	y: number;
}

const Tile: React.FC<TileProps> = ({ x, y }) => {
	const frame = useCurrentFrame();
	const offsetPos = (frame / durationInFrames) * tileDimension;
	return (
		<div
			className="grid"
			style={{
				gridTemplateColumns: `${emojiWidth}px ${emojiWidth}px`,
				gridTemplateRows: `${emojiWidth}px ${emojiWidth}px`,
				gap: `${gap}px`,
				position: 'absolute',
				top: `calc(50% + ${y}px + ${offsetPos}px)`,
				left: `calc(50% + ${x}px + ${offsetPos}px)`,
			}}
		>
			{emojis.map((emoji) => (
				<Gif src={emoji} width={emojiWidth} height={emojiWidth} fit="contain" />
			))}
		</div>
	);
};
