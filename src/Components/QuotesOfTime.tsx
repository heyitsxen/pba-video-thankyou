import { Sequence } from 'remotion';
import { quotes } from '../Data/quotes';
import { QUOTES_DURATION_IN_FRAMES } from '../utils';
import SceneWrapper from './SceneWrapper';
import QuoteScene from '../Scenes/00X_Quote';

const QuotesOfTime: React.FC<QuotesOfTimeProps> = ({ startFrame }) => {
	const quotesComponents = quotes.map((data, idx) => {
		const { quote, emojis, textStyle, containerStyle } = data;
		const durationInFrames = QUOTES_DURATION_IN_FRAMES;
		const adjustedStartFrame = durationInFrames * idx;

		return (
			<SceneWrapper
				key={idx}
				name={`quote-${idx}`}
				startFrame={adjustedStartFrame}
				frameDuration={durationInFrames}
			>
				<QuoteScene
					quote={quote}
					emojis={emojis}
					textStyle={textStyle}
					containerStyle={containerStyle}
				/>
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

interface QuotesOfTimeProps {
	startFrame: number;
}
