import SwingInText from '../Components/Decoration/SwingInText';
import SwingInEmoji from '../Components/Decoration/SwingInEmoji';
import sadbear from '../Assets/emoji/sadbear.gif';
import saddog from '../Assets/emoji/saddog.webp';
import catok from '../Assets/emoji/catok.webp';

const Dispare = () => {
	return (
		<>
			<h1 className="text-8xl leading-snug text-center max-w-full">
				and we are not that
				<br />
				active this year...
			</h1>

			<SwingInText
				textClasses="text-4xl"
				startPosition={{ x: 110, y: 0, rotation: -40 }}
				endPosition={{ x: 90, y: 15, rotation: -30 }}
				startFrame={15}
				duration={35}
			>
				💀 RIP Royal
			</SwingInText>
			<SwingInText
				textClasses="text-4xl"
				startPosition={{ x: 40, y: 120, rotation: -20 }}
				endPosition={{ x: 50, y: 90, rotation: -10 }}
				startFrame={35}
				duration={35}
			>
				Imagine having work 🤣
			</SwingInText>
			<SwingInText
				textClasses="text-4xl"
				startPosition={{ x: -10, y: -10, rotation: -40 }}
				endPosition={{ x: 18, y: 20, rotation: 12 }}
				startFrame={55}
				duration={35}
			>
				OCE 🦘 is kinda sus
			</SwingInText>

			<SwingInEmoji
				source={sadbear}
				startPosition={{ x: 50, y: -20, rotation: 0 }}
				endPosition={{ x: 60, y: 15, rotation: 10 }}
				startFrame={25}
			/>
			<SwingInEmoji
				source={catok}
				startPosition={{ x: 100, y: 100, rotation: 0 }}
				endPosition={{ x: 85, y: 67, rotation: 5 }}
				startFrame={45}
				img
			/>
			<SwingInEmoji
				source={saddog}
				startPosition={{ x: -10, y: 100, rotation: 0 }}
				endPosition={{ x: 13, y: 82, rotation: -10 }}
				startFrame={65}
				clockwise={false}
				img
			/>
		</>
	);
};

export default Dispare;
