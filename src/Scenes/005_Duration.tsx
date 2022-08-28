import { Gif } from '@remotion/gif';
import screeedance from '../Assets/screeedance.gif';

const Duration = () => {
	return (
		<div className="flex flex-nowrap items-center gap-20 pb-14">
			<h1 className="text-7xl leading-snug text-center max-w-full">
				I'm amazed that
				<br />
				were still running
			</h1>
			<Gif src={screeedance} width={160} height={160} fit="contain" />
			<p
				className="text-3xl"
				style={{
					position: 'absolute',
					bottom: '15%',
					left: '30%',
					transform: 'rotate(-20deg)',
				}}
			>
				6 years holy crap!
			</p>
		</div>
	);
};

export default Duration;
