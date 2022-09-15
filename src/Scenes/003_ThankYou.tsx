import { useCurrentFrame, random } from 'remotion';
import { Gif } from '@remotion/gif';
import kawaibear from '../Assets/kawaibear.gif';

const ThankYou = () => {
	const heartsTop = new Array(10).fill(true).map((a, i) => {
		return {
			startFrame: i * 5,
			left: i * 10,
			top: 0,
		};
	});

	return (
		<>
			<h1 className="text-8xl leading-snug text-center">
				Thanks for hanging
				<br />
				out with us!
			</h1>
			<Gif src={kawaibear} width={160} height={160} fit="contain" />
			{heartPositions.map((v, idx) => (
				<Heart key={idx} top={v.top} left={v.left} emoji={v.emoji} />
			))}
		</>
	);
};

export default ThankYou;

interface HeartProps {
	top: number;
	left: number;
	emoji: string;
}
79;

const Heart: React.FC<HeartProps> = ({ top, left, emoji }) => {
	const frame = useCurrentFrame();
	const randomVariant = random(`heartVariant-${left}`) * (left + top);

	const bobHeight = Math.sin((frame + randomVariant) / 10) * 2;
	const rotation = (randomVariant + frame) * 4;

	return (
		<span
			style={{
				position: 'absolute',
				top: `${top + bobHeight}%`,
				left: `${left}%`,
				fontSize: '5rem',
				transform: `rotateY(${rotation}deg)`,
			}}
		>
			{emoji}
		</span>
	);
};

const heartPositions = [
	{
		top: 15,
		left: 3,
		emoji: '🧡',
	},
	{
		top: 49,
		left: 11,
		emoji: '💝',
	},
	{
		top: -1,
		left: 23,
		emoji: '💗',
	},
	{
		top: 67,
		left: 26,
		emoji: '💌',
	},
	{
		top: 4,
		left: 69,
		emoji: '💖',
	},
	{
		top: 83,
		left: 45,
		emoji: '🥰',
	},
	{
		top: 70,
		left: 66,
		emoji: '❤️',
	},
	{
		top: 9,
		left: 47,
		emoji: '💘',
	},
	{
		top: 25,
		left: 86,
		emoji: '💟',
	},
	{
		top: 51,
		left: 79,
		emoji: '💞',
	},
];
