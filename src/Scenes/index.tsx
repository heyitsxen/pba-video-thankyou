import Hero from './001_Hero';
import Celebration from './002_Celebration';
import ThankYou from './003_ThankYou';
import Missfits from './004_Missfits';
import Duration from './005_Duration';
import Games from './006_Games';
import Dispare from './007_Dispare';
import Revival from './008_Revival';
import Love from './009_Love';
import Segway from './010_Segway';
import NoContext from './011_NoContext';
import SceneProps from './Scene.type';

const scenes: Scene[] = [
	{
		name: 'Hero',
		Component: Hero,
		duration: 6,
		fadeStart: 0, // TODO: add start and end fade
	},
	{
		name: 'Celebration',
		Component: Celebration,
		duration: 7,
	},
	{
		name: 'Thank You',
		Component: ThankYou,
		duration: 6,
	},
	{
		name: 'Missfits',
		Component: Missfits,
		duration: 6.5,
	},
	{
		name: 'Duration',
		Component: Duration,
		duration: 6,
	},
	{
		name: 'Games',
		Component: Games,
		duration: 7.5,
	},
	{
		name: 'Dispare',
		Component: Dispare,
		duration: 6,
	},
	{
		name: 'Revival',
		Component: Revival,
		duration: 5.5,
	},
	{
		name: 'Love',
		Component: Love,
		duration: 5,
	},
	{
		name: 'Segway',
		Component: Segway,
		duration: 5,
	},
	{
		name: 'NoContext',
		Component: NoContext,
		duration: 5,
	},
];

export default scenes;

interface Scene {
	name: string;
	Component: React.FC<SceneProps>;
	duration: number;
	fadeStart?: number;
	fadeEnd?: number;
}
