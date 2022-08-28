import Hero from './001_Hero';
import Celebration from './002_Celebration';
import ThankYou from './003_ThankYou';
import Missfits from './004_Missfits';
import Duration from './005_Duration';
import Games from './006_Games';
import Dispare from './007_Dispare';
import Revival from './008_Revival';
import LoveXen from './009_LoveXen';

const scenes: Scene[] = [
	{
		name: 'Hero',
		Component: Hero,
		duration: 5,
		fadeStart: 0,
	},
	{
		name: 'Celebration',
		Component: Celebration,
		duration: 5,
	},
	{
		name: 'Thank You',
		Component: ThankYou,
		duration: 5,
	},
	{
		name: 'Missfits',
		Component: Missfits,
		duration: 5,
	},
	{
		name: 'Duration',
		Component: Duration,
		duration: 5,
	},
	{
		name: 'Games',
		Component: Games,
		duration: 5,
	},
	{
		name: 'Dispare',
		Component: Dispare,
		duration: 5,
	},
	{
		name: 'Revival',
		Component: Revival,
		duration: 5,
	},
	{
		name: 'LoveXen',
		Component: LoveXen,
		duration: 5,
	},
];

export default scenes;

interface Scene {
	name: string;
	Component: () => JSX.Element;
	duration: number;
	fadeStart?: number;
	fadeEnd?: number;
}
