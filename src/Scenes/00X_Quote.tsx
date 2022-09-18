import { EmojiQuote } from '../Data/quotes';
import ImageGrow from '../Components/Decoration/ImageGrow';
import angrysadlove from '../Assets/emoji/angrysadlove.webp';

const QuoteScene: React.FC<EmojiQuote> = ({ quote, emojis }) => {
	const quoteComponent = Array.isArray(quote)
		? quote.map((q) => quoteTextWrapper(q))
		: quoteTextWrapper(quote);

	return (
		<>
			<div className="flex flex-col gap-10" style={{ maxWidth: '70%' }}>
				{quoteComponent}
			</div>
			{coordinates.map((coord) => (
				<ImageGrow
					image={{
						source: angrysadlove,
						dimensions: {
							width: 75,
							height: 75,
						},
						position: coord,
					}}
				/>
			))}
		</>
	);
};

export default QuoteScene;

const quoteTextWrapper = (text: string) => (
	<h1 className="text-7xl leading-snug text-center">"{text}"</h1>
);

const coordinates = [
	{ x: 6.5, y: 10 },
	{ x: 23.9, y: 10 },
	{ x: 41.3, y: 10 },
	{ x: 58.7, y: 10 },
	{ x: 76.1, y: 10 },
	{ x: 93.5, y: 10 },
	{ x: 93.5, y: 37 },
	{ x: 93.5, y: 65 },
	{ x: 93.5, y: 90 },
	{ x: 76.1, y: 90 },
	{ x: 58.7, y: 90 },
	{ x: 41.3, y: 90 },
	{ x: 23.9, y: 90 },
	{ x: 6.5, y: 90 },
	{ x: 6.5, y: 65 },
	{ x: 6.5, y: 37 },
];
