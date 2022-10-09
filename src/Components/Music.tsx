import { Audio, Sequence, staticFile, interpolate } from 'remotion';
import { FRAME_PER_SECOND } from '../utils';

const fadeMusic = FRAME_PER_SECOND * 5;

const Music: React.FC<MusicProps> = ({ playlist }) => {
	const playlistComponents = () => {
		const constructedPlaylist = playlist.reduce(
			({ startFrame, tracks }, data) => {
				const { songFile, duration } = data;
				const durationInFrames = FRAME_PER_SECOND * duration;

				const newSong = (
					<Sequence
						name={songFile.replace('.mp3', '')}
						from={startFrame}
						durationInFrames={durationInFrames}
					>
						<Audio
							volume={(f) =>
								interpolate(
									f,
									[
										0,
										fadeMusic,
										durationInFrames - fadeMusic,
										durationInFrames,
									],
									[0, 0.5, 0.5, 0],
									{ extrapolateLeft: 'clamp' }
								)
							}
							src={staticFile(songFile)}
						/>
					</Sequence>
				);

				return {
					startFrame: startFrame + durationInFrames - fadeMusic,
					tracks: [...tracks, newSong],
				};
			},
			{ startFrame: 0, tracks: [] } as PlaylistConstructor
		);
		return constructedPlaylist.tracks;
	};

	return (
		<>
			<Sequence from={0} name="Music">
				{playlistComponents()}
			</Sequence>
		</>
	);
};

export default Music;

interface MusicProps {
	playlist: Playlist[];
}

interface Playlist {
	songFile: string;
	duration: number;
}

interface PlaylistConstructor {
	startFrame: number;
	tracks: JSX.Element[];
}
