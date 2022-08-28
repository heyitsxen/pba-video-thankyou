import { Composition } from 'remotion';
import { MyComposition } from './Composition';
import './style.css';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="MyComp"
				component={MyComposition}
				durationInFrames={3600}
				fps={60}
				width={1280}
				height={720}
			/>
		</>
	);
};
