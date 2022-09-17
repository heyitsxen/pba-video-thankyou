import { games } from '../Data/games';
import ImageGrow from '../Components/Decoration/ImageGrow';
import { Sequence } from 'remotion';

const Games = () => {
	return (
		<>
			<h1 className="text-7xl leading-snug text-center max-w-full">
				We've played alot
				<br />
				over the years
			</h1>
			{games.map((game, idx) => (
				<Sequence from={5 + idx * 6}>
					<ImageGrow image={game} />
				</Sequence>
			))}
		</>
	);
};

export default Games;
