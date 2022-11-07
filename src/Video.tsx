import { Composition } from 'remotion';
import { PBA } from './_PBA';
import { QuotesComp } from './_QuotesComp';
import { Banner } from './_Banner';
import './font.css';
import './style.css';
import { FRAME_PER_SECOND, QUOTES_DURATION_IN_FRAMES } from './utils';
import { quotes } from './Data/quotes';
import { pbaScenes, quotesPreScenes, quotesPostScenes, Scene } from './Scenes';

const scenesInSeconds = (scenes: Scene[]) =>
	scenes.reduce((acc, scene) => acc + scene.duration, 0);

// PBA
const duratonScenes = FRAME_PER_SECOND * scenesInSeconds(pbaScenes);
// QUOTES
const durationQuotesPre = FRAME_PER_SECOND * scenesInSeconds(quotesPreScenes);
const durationQuotes = QUOTES_DURATION_IN_FRAMES * quotes.length;
const durationQuotesPost = FRAME_PER_SECOND * scenesInSeconds(quotesPostScenes);

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="PBA-Thankyou"
				component={PBA}
				durationInFrames={duratonScenes}
				fps={FRAME_PER_SECOND}
				width={1280}
				height={720}
			/>
			<Composition
				id="quotesOfTime"
				component={QuotesComp}
				durationInFrames={
					durationQuotesPre + durationQuotes + durationQuotesPost
				}
				fps={FRAME_PER_SECOND}
				width={1280}
				height={720}
			/>
			<Banner />
		</>
	);
};
