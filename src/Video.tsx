import { Composition } from 'remotion';
import { MyComposition } from './Composition';
import './font.css';
import './style.css';
import { FRAME_PER_SECOND } from './utils';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="MyComp"
				component={MyComposition}
				durationInFrames={7200}
				fps={FRAME_PER_SECOND}
				width={1280}
				height={720}
			/>
		</>
	);
};
