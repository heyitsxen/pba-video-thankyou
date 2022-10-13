import {
	Audio,
	Sequence,
	staticFile,
	interpolate,
	useVideoConfig,
} from 'remotion';

const Music: React.FC<MusicProps> = ({ playlist }) => {
	const { fps } = useVideoConfig();
	const fadeMusic = fps * 5;

	const playlistComponents = () => {
		const constructedPlaylist = playlist.reduce(
			({ startFrame, tracks }, data) => {
				const { songFile, duration } = data;
				const durationInFrames = fps * duration;
				const songName = songFile.replace('.mp3', '');

				const newSong = (
					<Sequence
						key={songName}
						name={songName}
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
