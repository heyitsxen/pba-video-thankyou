import { random, useVideoConfig } from 'remotion';
import SceneProps from './Scene.type';
import Balloon from '../Components/Decoration/Balloon';
import Confetti from '../Components/Decoration/Confetti';

const Celebration: React.FC<SceneProps> = () => {
	const { fps } = useVideoConfig();

	const randomValue = new Array(25).fill(true).map((a, i) => {
		return {
			startFrame: Math.floor(random(`seed-startFrame-${i}`) * (fps * 2)),
			left: `${i * 4}%`,
		};
	});

	return (
		<>
			<h1 className="text-8xl leading-snug text-center z-10">
				We just reached
				<br />
				<b>6 years!</b>
			</h1>
			{randomValue.map((v, idx) => (
				<Balloon key={idx} startFrame={v.startFrame} left={v.left} />
			))}
			<Confetti />
		</>
	);
};
//

export default Celebration;
