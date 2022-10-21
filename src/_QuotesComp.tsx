import { AbsoluteFill } from 'remotion';
import QuotesOfTime from './Components/QuotesOfTime';
import Music from './Components/Music';
import { quotesPostScenes, quotesPreScenes } from './Scenes';
import {
	compileScenes,
	getScenesInTotalFrames,
	QUOTES_DURATION_IN_FRAMES,
} from './utils';
import { quotes } from './Data/quotes';

const preScenesInFrames = getScenesInTotalFrames(quotesPreScenes);
const scenesInFrames = quotes.length * QUOTES_DURATION_IN_FRAMES;
const postScenesInFrames = getScenesInTotalFrames(quotesPostScenes);
const playlist = [
	{
		songFile: 'SleepyAndComfy.mp3',
		duration: 134,
	},
	{
		songFile: 'RoutineNumber2.mp3',
		duration: 122,
	},
	{
		songFile: 'LightsOut.mp3',
		duration: 117,
	},
	{
		songFile: 'CheckingSocials.mp3',
		duration: 125,
	},
];

export const QuotesComp = () => {
	return (
		<AbsoluteFill
			style={{ backgroundColor: '#36393f' }}
			className="text-slate-50 items-center justify-center"
		>
			<Music
				playlist={playlist}
				totalFrames={preScenesInFrames + scenesInFrames + postScenesInFrames}
			/>
			{compileScenes(quotesPreScenes)}
			<QuotesOfTime startFrame={preScenesInFrames} />
			{compileScenes(quotesPostScenes, preScenesInFrames + scenesInFrames)}
		</AbsoluteFill>
	);
};
