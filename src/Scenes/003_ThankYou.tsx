import { Gif } from '@remotion/gif';
import kawaibear from '../Assets/kawaibear.gif';

const ThankYou = () => {
	return (
		<>
			<h1 className="text-8xl leading-snug text-center">
				Thanks for hanging
				<br />
				out with us!
			</h1>
			<Gif src={kawaibear} width={160} height={160} fit="contain" />
		</>
	);
};

export default ThankYou;
