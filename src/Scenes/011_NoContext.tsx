import { useVideoConfig } from 'remotion';
import FadeInWrapper from '../Components/Decoration/FadeInWrapper';

const NoContext = () => {
	const { fps } = useVideoConfig();
	return (
		<>
			<h1 className="text-8xl leading-snug text-center max-w-full">
				All out of context
			</h1>
			<h1 className="text-8xl leading-snug text-center max-w-full">
				of course
			</h1>
			<FadeInWrapper startFrame={fps * 2} duration={fps}>
				<h1
					className="text-8xl leading-snug text-center max-w-full"
					style={{ fontFamily: "'Permanent Marker', cursive" }}
				>
					ENJOY!
				</h1>
			</FadeInWrapper>
		</>
	);
};

export default NoContext;
