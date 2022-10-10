import { Img } from 'remotion';
import musicalNote from '../Assets/emoji/musical_note.svg';

interface OutroProps {
	tracklist: string[];
}

const Outro: React.FC<OutroProps> = ({ tracklist }) => {
	return (
		<>
			<div className="grid grid-cols-2 gap-32" style={{ maxWidth: '80%' }}>
				<div
					id="lhs"
					className="flex flex-col gap-4 align-middle justify-center text-center"
				>
					<div className="flex flex-nowrap gap-4 justify-center mb-8">
						<Img src={musicalNote} width={45} height={45} />
						<h1 className="text-4xl leading-compact text-center">
							by WALKING DOG
						</h1>
					</div>
					<p className="text-4xl mb-6">
						🎤 <span className="underline underline-offset-4">Going Live</span>{' '}
						🖥️
					</p>
					<ul>
						{tracklist.map((track) => (
							<li key={track} className="text-3xl mb-4">
								{track}
							</li>
						))}
					</ul>
				</div>

				<div id="rhs">
					<div className="flex flex-col gap-8">
						<h1 className="text-5xl leading-compact text-center">
							Edited by Xen
						</h1>
						<h1 className="text-2xl leading-compact text-center">
							Created with<br></br>ReactJS & Remotion
						</h1>
						<h1 className="text-sm leading-compact text-center">
							because holy crap why does an Adobe Creative Cloud licence cost
							$80 AUD a month I just wanna make meme content not trying to girl
							boss energy my way into hustle culture and start a side job so I
							can generate additional income to later invest in my "porforlio"
							which will help me retire at the age of 30 with my 5 investment
							properties
						</h1>
					</div>
				</div>
			</div>
			<div
				id="horizontal-divider"
				style={{
					position: 'absolute',
					top: '20%',
					height: '60%',
					border: '1px solid rgba(255,255,255,0.5)',
					borderRadius: '50%',
				}}
			/>
		</>
	);
};

export default Outro;
