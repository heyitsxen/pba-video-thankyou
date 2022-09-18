import { Sequence } from 'remotion';
import { quotes } from '../Data/quotes';
import { FRAME_PER_SECOND } from '../utils';
import SceneWrapper from './SceneWrapper';
import QuoteScene from '../Scenes/00X_Quote';

interface QuotesOfTimeProps {
	startFrame: number;
}

const QuotesOfTime: React.FC<QuotesOfTimeProps> = ({ startFrame }) => {
	const quotesComponents = quotes.map((data, idx) => {
		const { quote, emojis } = data;
		const durationInFrames = FRAME_PER_SECOND * 6;
		const adjustedStartFrame = durationInFrames * idx;

		return (
			<SceneWrapper
				key={idx}
				name={`quote-${idx}`}
				startFrame={adjustedStartFrame}
				frameDuration={durationInFrames}
			>
				<QuoteScene quote={quote} emojis={emojis} />
			</SceneWrapper>
		);
	});

	return (
		<>
			<Sequence from={startFrame} name="QuotesOfTime">
				{quotesComponents}
			</Sequence>
		</>
	);
};

export default QuotesOfTime;
