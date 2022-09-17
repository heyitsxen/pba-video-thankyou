import sussy from '../Assets/emoji/sussy.gif';
import SwingInEmoji from '../Components/Decoration/SwingInEmoji';

const Missfits = () => {
	return (
		<>
			<h1 className="text-7xl leading-snug text-center max-w-full">
				Sidegames 2 Discord was
				<br />
				created for <b>missfits</b> like us,
				<br />
				who were exiled from other groups
			</h1>
			<SwingInEmoji
				source={sussy}
				startPosition={{ x: -10, y: 0, rotation: 0 }}
				endPosition={{ x: 10.5, y: 35, rotation: 0 }}
				startFrame={30}
			/>
			<SwingInEmoji
				source={sussy}
				startPosition={{ x: 100, y: -10, rotation: 0 }}
				endPosition={{ x: 80, y: 15, rotation: 0 }}
				startFrame={60}
			/>
			<SwingInEmoji
				source={sussy}
				startPosition={{ x: 40, y: 110, rotation: 0 }}
				endPosition={{ x: 65, y: 95, rotation: 0 }}
				startFrame={90}
			/>
		</>
	);
};

export default Missfits;
