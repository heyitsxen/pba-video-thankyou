import { useMemo } from 'react';
import { random, Sequence } from 'remotion';
import { Quote } from '../Data/quotes';
import ImageGrow from '../Components/Decoration/ImageGrow';

const varPos = 8;
const QuoteScene: React.FC<Quote> = ({
	quote,
	emojis,
	containerStyle,
	textStyle,
}) => {
	const quoteComponent = Array.isArray(quote)
		? quote.map((q) => quoteTextWrapper(q, textStyle))
		: quoteTextWrapper(quote, textStyle);

	const emojiComponentData = useMemo(() => {
		const emojiSources = emojis.reduce(
			(acc, e) => [...acc, ...Array(e.count).fill(e.source)],
			[] as string[]
		);

		const shuffledEmojis = shuffle(emojiSources, `emoji-shuffle-${quote}`);
		const shuffledCoordinates = shuffle(
			emojiCoordinates,
			`coord-shuffle-${quote}`
		);

		return shuffledEmojis.map((source, idx) => {
			const xVariation = random(`x-${idx}-${quote}`) * varPos - varPos / 2;
			const yVariation = random(`y-${idx}-${quote}`) * varPos - varPos / 2;
			const coord = shuffledCoordinates[idx];
			return (
				<Sequence key={idx} from={idx * 6} layout="none">
					<ImageGrow
						image={{
							source: source,
							dimensions: {
								width: 75,
								height: 75,
							},
							position: {
								x: coord.x + xVariation,
								y: coord.y + yVariation,
							},
						}}
						rock
						gif={source.endsWith('.gif')}
					/>
				</Sequence>
			);
		});
	}, [quote, emojis]);

	return (
		<>
			<div
				className="flex flex-col gap-4"
				style={{ maxWidth: '70%', ...containerStyle }}
			>
				{quoteComponent}
			</div>
			{emojiComponentData}
		</>
	);
};

export default QuoteScene;

const quoteTextWrapper = (text: string, textStyle = {}) => {
	const appliedText = text
		.split('**')
		.map((str, idx) =>
			idx % 2 ? <span style={{ color: '#70E275' }}>{str}</span> : str
		);

	return (
		<h1 className="text-7xl leading-snug text-center" style={textStyle}>
			"{appliedText}"
		</h1>
	);
};

const emojiCoordinates = [
	{ x: 10, y: 15 },
	{ x: 26, y: 15 },
	{ x: 42, y: 15 },
	{ x: 58, y: 15 },
	{ x: 74, y: 15 },
	{ x: 90, y: 15 },
	{ x: 90, y: 38.33 },
	{ x: 90, y: 61.67 },
	{ x: 90, y: 85 },
	{ x: 76.1, y: 85 },
	{ x: 58.7, y: 85 },
	{ x: 41.3, y: 85 },
	{ x: 23.9, y: 85 },
	{ x: 10, y: 85 },
	{ x: 10, y: 61.67 },
	{ x: 10, y: 38.33 },
];

// FROM: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
const shuffle = (array: any[], key: string) => {
	let currentIndex = array.length,
		randomIndex;

	// While there remain elements to shuffle.
	while (currentIndex != 0) {
		// Pick a remaining element.
		randomIndex = Math.floor(random(key) * currentIndex);
		currentIndex--;

		// And swap it with the current element.
		[array[currentIndex], array[randomIndex]] = [
			array[randomIndex],
			array[currentIndex],
		];
	}

	return array;
};
