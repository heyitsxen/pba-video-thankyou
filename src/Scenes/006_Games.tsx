import { Sequence } from 'remotion';
import { games } from '../Data/games';
import ImageGrow from '../Components/Decoration/ImageGrow';

const Games = () => {
	return (
		<>
			{games.map((game, idx) => (
				<Sequence key={idx} from={5 + idx * 10}>
					<ImageGrow image={game} />
				</Sequence>
			))}
			<h1 className="text-8xl leading-snug text-center max-w-full z-10">
				We've played alot
				<br />
				over the years
			</h1>
		</>
	);
};

export default Games;
