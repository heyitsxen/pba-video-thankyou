import { AbsoluteFill } from 'remotion';
import SceneWrapper from './Components/SceneWrapper';
import scenes from './Scenes';
import { FRAME_PER_SECOND } from './utils';

export const MyComposition = () => {
	const compileScenes = () => {
		const scenesAsJSX = scenes.reduce(
			({ startFrame, scenes }, scene) => {
				const { name, Component, duration } = scene;
				const durationInFrames = FRAME_PER_SECOND * duration;

				const newScene = (
					<SceneWrapper
						key={name}
						name={name}
						startFrame={startFrame}
						frameDuration={durationInFrames}
					>
						<Component startFrame={startFrame} />
					</SceneWrapper>
				);
				return {
					startFrame: startFrame + durationInFrames,
					scenes: [...scenes, newScene],
				};
			},
			{ startFrame: 0, scenes: [] } as SceneConstructor
		);

		return scenesAsJSX.scenes;
	};

	return (
		<AbsoluteFill
			style={{ backgroundColor: '#36393f' }}
			className="text-slate-50 items-center justify-center"
		>
			{compileScenes()}
		</AbsoluteFill>
	);
};

interface SceneConstructor {
	startFrame: number;
	scenes: JSX.Element[];
}
