import SceneWrapper from './Components/SceneWrapper';
import { Scene } from './Scenes';

export const FRAME_PER_SECOND = 30;

// QUOTES OF TIME
export const QUOTES_DURATION_PER_SECOND = 7;
export const QUOTES_DURATION_IN_FRAMES =
	QUOTES_DURATION_PER_SECOND * FRAME_PER_SECOND;

// HELPERS
export const compileScenes = (scenes: Scene[], start = 0) => {
	const scenesAsJSX = scenes.reduce(
		({ startFrame, scenes }, scene) => {
			const { name, Component, duration, componentProps } = scene;
			const durationInFrames = FRAME_PER_SECOND * duration;

			const newScene = (
				<SceneWrapper
					key={name}
					name={name}
					startFrame={startFrame}
					frameDuration={durationInFrames}
				>
					<Component startFrame={startFrame} {...componentProps} />
				</SceneWrapper>
			);
			return {
				startFrame: startFrame + durationInFrames,
				scenes: [...scenes, newScene],
			};
		},
		{ startFrame: start ? start : 0, scenes: [] } as SceneConstructor
	);

	return scenesAsJSX.scenes;
};

interface SceneConstructor {
	startFrame: number;
	scenes: JSX.Element[];
}
