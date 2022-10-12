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
import Outro from './00X_Outro';
import SceneProps from './Scene.type';

export const pbaScenes: Scene[] = [
	{
		name: 'Hero',
		Component: Hero,
		duration: 13.5,
		fadeStart: 0, // TODO: add start and end fade
	},
	{
		name: 'Celebration',
		Component: Celebration,
		duration: 8,
	},
	{
		name: 'Thank You',
		Component: ThankYou,
		duration: 7,
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
		duration: 6,
	},
	{
		name: 'Love',
		Component: Love,
		duration: 6,
	},
	{
		name: 'Outro',
		Component: Outro,
		duration: 8,
		componentProps: {
			tracklist: ['Waking up'],
		},
	},
];

export const quotesPreScenes: Scene[] = [
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

export const quotesPostScenes: Scene[] = [
	{
		name: 'Outro',
		Component: Outro,
		duration: 7,
		componentProps: {
			tracklist: ['Sleepy and Comfy', 'Sleepy and Comfy2'],
		},
	},
];

export interface Scene {
	name: string;
	Component: React.FC<any>;
	duration: number;
	fadeStart?: number;
	fadeEnd?: number;
	componentProps?: any;
}
