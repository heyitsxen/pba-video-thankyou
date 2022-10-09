import { AbsoluteFill } from 'remotion';
import QuotesOfTime from './Components/QuotesOfTime';
import Music from './Components/Music';
import { quotesPostScenes, quotesPreScenes } from './Scenes';
import {
	compileScenes,
	FRAME_PER_SECOND,
	QUOTES_DURATION_IN_FRAMES,
} from './utils';
import { quotes } from './Data/quotes';

const preScenesInFrames = quotesPreScenes.reduce(
	(acc, scene) => acc + scene.duration * FRAME_PER_SECOND,
	0
);
const scenesInFrames = quotes.length * QUOTES_DURATION_IN_FRAMES;

const playlist = [
	{
		songFile: 'SleepyAndComfy.mp3',
		duration: 134,
	},
	{
		songFile: 'SleepyAndComfy.mp3',
		duration: 134,
	},
];

export const QuotesComp = () => {
	return (
		<AbsoluteFill
			style={{ backgroundColor: '#36393f' }}
			className="text-slate-50 items-center justify-center"
		>
			<Music playlist={playlist} />
			{compileScenes(quotesPreScenes)}
			<QuotesOfTime startFrame={preScenesInFrames} />
			{compileScenes(quotesPostScenes, preScenesInFrames + scenesInFrames)}
		</AbsoluteFill>
	);
};
