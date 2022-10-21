import {
	Audio,
	Sequence,
	staticFile,
	interpolate,
	useVideoConfig,
} from 'remotion';

const Music: React.FC<MusicProps> = ({ playlist, totalFrames }) => {
	const { fps } = useVideoConfig();
	const fadeMusic = fps * 5;

	const playlistComponents = () => {
		const constructedPlaylist = playlist.reduce(
			({ startFrame, tracks }, data) => {
				const { songFile, duration } = data;
				const durationInFrames = fps * duration;
				const songName = songFile.replace('.mp3', '');

				// Check if song duration is longer than the videos max frame
				const normalFadeTiming = [
					durationInFrames - fadeMusic,
					durationInFrames,
				];
				const maxFadeTiming = [
					totalFrames - startFrame - fadeMusic,
					totalFrames - startFrame,
				];
				const timeRemaining = totalFrames - (startFrame + durationInFrames);
				const audioFrames = [
					0,
					fadeMusic,
					...(timeRemaining < 0 ? maxFadeTiming : normalFadeTiming),
				];

				const newSong = (
					<Sequence
						key={songName}
						name={songName}
						from={startFrame}
						durationInFrames={durationInFrames}
					>
						<Audio
							volume={(f) =>
								interpolate(f, audioFrames, [0, 0.5, 0.5, 0], {
									extrapolateLeft: 'clamp',
								})
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
	totalFrames: number;
}

interface Playlist {
	songFile: string;
	duration: number;
}

interface PlaylistConstructor {
	startFrame: number;
	tracks: JSX.Element[];
}
