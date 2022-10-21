import { AbsoluteFill } from 'remotion';
import QuotesOfTime from './Components/QuotesOfTime';
import Music from './Components/Music';
import { pbaScenes } from './Scenes';
import { compileScenes, getScenesInTotalFrames } from './utils';

const scenesDurationInFrames = getScenesInTotalFrames(pbaScenes);
const playlist = [{ songFile: 'WakingUp.mp3', duration: 126 }];

export const PBA = () => {
	return (
		<AbsoluteFill
			style={{ backgroundColor: '#36393f' }}
			className="text-slate-50 items-center justify-center"
		>
			<Music playlist={playlist} totalFrames={scenesDurationInFrames} />
			{compileScenes(pbaScenes)}
			<QuotesOfTime startFrame={scenesDurationInFrames} />
		</AbsoluteFill>
	);
};
