import SwingInEmoji from '../Components/Decoration/SwingInEmoji';
import { sussy } from '../Assets/emoji';

// TODO: replace duplicate sussys with other emotes
const Missfits = () => {
	return (
		<>
			<h1 className="text-8xl leading-snug text-center max-w-full">
				Sidegames 2 Discord was
				<br />
				created for <b>missfits</b> like us
			</h1>
			<SwingInEmoji
				source={sussy}
				startPosition={{ x: -10, y: 0, rotation: 0 }}
				endPosition={{ x: 10.5, y: 25, rotation: 0 }}
				startFrame={30}
			/>
			<SwingInEmoji
				source={sussy}
				startPosition={{ x: 100, y: -10, rotation: 0 }}
				endPosition={{ x: 77, y: 15, rotation: 0 }}
				startFrame={60}
			/>
			<SwingInEmoji
				source={sussy}
				startPosition={{ x: 40, y: 110, rotation: 0 }}
				endPosition={{ x: 65, y: 90, rotation: 0 }}
				startFrame={90}
			/>
		</>
	);
};

export default Missfits;
