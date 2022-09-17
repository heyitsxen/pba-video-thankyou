import { Sequence } from 'remotion';
import SwingInEmoji from '../Components/Decoration/SwingInEmoji';
import ImageGrow from '../Components/Decoration/ImageGrow';
import boing from '../Assets/emoji/boing.gif';
import comfy from '../Assets/emoji/comfy.webp';
import owocatblob from '../Assets/emoji/owocatblob.gif';
import pepelove from '../Assets/emoji/pepelove.gif';
import bongocatlove from '../Assets/emoji/bongocatlove.gif';
import bearlovetackle from '../Assets/emoji/bearlovetackle.gif';
import honkhonk from '../Assets/emoji/honkhonk.gif';

const Revival = () => {
	return (
		<>
			<h1 className="text-8xl leading-snug text-center">But we'll be here!</h1>

			<SwingInEmoji
				source={boing}
				startPosition={{ x: -10, y: 0, rotation: 0 }}
				endPosition={{ x: 12, y: 37, rotation: 10 }}
				startFrame={30}
			/>
			<Sequence from={40}>
				<ImageGrow
					image={{
						source: owocatblob,
						dimensions: { width: 150, height: 150 },
						position: {
							x: 26,
							y: 68,
						},
					}}
					gif
				/>
			</Sequence>
			<Sequence from={50}>
				<ImageGrow
					image={{
						source: comfy,
						dimensions: { width: 150, height: 120 },
						position: {
							x: 38,
							y: 26,
						},
					}}
				/>
			</Sequence>
			<SwingInEmoji
				source={pepelove}
				startPosition={{ x: 80, y: 120, rotation: 0 }}
				endPosition={{ x: 52, y: 72, rotation: 10 }}
				startFrame={60}
			/>
			<Sequence from={70}>
				<ImageGrow
					image={{
						source: bongocatlove,
						dimensions: { width: 150, height: 150 },
						position: {
							x: 80,
							y: 35,
						},
					}}
					gif
				/>
			</Sequence>
			<SwingInEmoji
				source={honkhonk}
				startPosition={{ x: 100, y: -30, rotation: 0 }}
				endPosition={{ x: 62, y: 15, rotation: -30 }}
				startFrame={80}
			/>
			<Sequence from={90}>
				<ImageGrow
					image={{
						source: bearlovetackle,
						dimensions: { width: 150, height: 150 },
						position: {
							x: 78,
							y: 67,
						},
					}}
					gif
				/>
			</Sequence>
		</>
	);
};

export default Revival;
