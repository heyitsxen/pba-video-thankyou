import { useCurrentFrame, random } from 'remotion';
import { Gif } from '@remotion/gif';
import { kawaibear } from '../Assets/emoji';

const ThankYou = () => {
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

interface HeartProps {
	top: number;
	left: number;
	emoji: string;
}

const heartPositions = [
	{
		top: 15,
		left: 3,
		emoji: '๐งก',
	},
	{
		top: 49,
		left: 11,
		emoji: '๐',
	},
	{
		top: 2,
		left: 23,
		emoji: '๐',
	},
	{
		top: 67,
		left: 26,
		emoji: '๐',
	},
	{
		top: 4,
		left: 69,
		emoji: '๐',
	},
	{
		top: 83,
		left: 45,
		emoji: '๐ฅฐ',
	},
	{
		top: 70,
		left: 66,
		emoji: 'โค๏ธ',
	},
	{
		top: 9,
		left: 47,
		emoji: '๐',
	},
	{
		top: 25,
		left: 86,
		emoji: '๐',
	},
	{
		top: 51,
		left: 79,
		emoji: '๐',
	},
];
