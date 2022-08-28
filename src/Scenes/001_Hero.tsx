import { Gif } from '@remotion/gif';
import lostbear from '../Assets/lostbear.gif';

const Hero = () => {
	return (
		<div className="flex flex-nowrap gap-12">
			<Gif src={lostbear} width={160} height={160} />
			<h1 className="text-8xl leading-compact text-center">
				Hey
				<br />
				PBA
			</h1>
		</div>
	);
};

export default Hero;

//<img className="w-48 h-48 mt-10" src={lostbear} />
