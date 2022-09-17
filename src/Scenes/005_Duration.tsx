import { Gif } from '@remotion/gif';
import screeedance from '../Assets/emoji/screeedance.gif';
import dogedance from '../Assets/emoji/dogedance.gif';
import ketdance from '../Assets/emoji/ketdance.gif';
import SwingInText from '../Components/Decoration/SwingInText';
import SwingInEmoji from '../Components/Decoration/SwingInEmoji';

const Duration = () => {
	return (
		<>
			<div className="flex flex-nowrap items-center gap-20 pb-14">
				<h1 className="text-8xl leading-snug text-center max-w-full">
					I'm amazed that
					<br />
					we are still running
				</h1>
				<Gif src={screeedance} width={240} height={240} fit="contain" />
			</div>
			<SwingInText
				textClasses="text-4xl"
				startPosition={{ x: 100, y: -10, rotation: 0 }}
				endPosition={{ x: 82, y: 18, rotation: -15 }}
				startFrame={55}
				duration={45}
			>
				6 years holy crap!
			</SwingInText>
			<SwingInEmoji
				source={dogedance}
				startPosition={{ x: -10, y: -20, rotation: 90 }}
				endPosition={{ x: 25, y: 15, rotation: 0 }}
				startFrame={30}
				duration={45}
				clockwise={false}
			/>
			<SwingInEmoji
				source={ketdance}
				startPosition={{ x: 70, y: 120, rotation: 0 }}
				endPosition={{ x: 45, y: 85, rotation: 15 }}
				startFrame={70}
				duration={45}
				clockwise={false}
			/>
		</>
	);
};

export default Duration;
