import { useCurrentFrame, random } from 'remotion';
import { Gif } from '@remotion/gif';
import kawaibear from '../Assets/kawaibear.gif';

const heartPositions = [
	{
		top: 20,
		left: 5,
	},
	{
		top: 15,
		left: 30,
	},
	{
		top: 80,
		left: 60,
	},
	{
		top: 75,
		left: 90,
	},
];

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
				<Heart key={idx} top={v.top} left={v.left} />
			))}
		</>
	);
};

export default ThankYou;

interface HeartProps {
	top: number;
	left: number;
}

const Heart: React.FC<HeartProps> = ({ top, left }) => {
	const frame = useCurrentFrame();
	const randomVariant = random(`heartVariant-${left}`) * (left + top);
	const bobHeight = Math.sin((frame + randomVariant) / 10) * 2;

	return (
		<span
			style={{
				position: 'absolute',
				top: `${top + bobHeight}%`,
				left: `${left}%`,
				fontSize: '5rem',
				transform: `rotateY(${frame * 4}deg)`,
			}}
		>
			❤️
		</span>
	);
};
