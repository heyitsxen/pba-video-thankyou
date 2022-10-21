import * as emoji from '../Assets/emoji';
import { rainbowText } from '../Styles';

interface EmojiQuote {
	source: string;
	count: number;
}

export interface Quote {
	quote: string | string[];
	emojis: EmojiQuote[];
	containerStyle?: object;
	textStyle?: object;
}

export const quotes: Quote[] = [
	{
		quote: [
			"What's the capital of Australia?!",
			'Canberra',
			'No, not that one!',
		],
		emojis: [
			{
				source: emoji.fblue,
				count: 5,
			},
			{
				source: emoji.kewklaugh,
				count: 2,
			},
			{
				source: emoji.lostbear,
				count: 3,
			},
			{
				source: emoji.firebear,
				count: 2,
			},
			{
				source: emoji.sadcat,
				count: 2,
			},
			{
				source: emoji.rope,
				count: 2,
			},
		],
	},
	{
		quote: 'What if humans instead of just having babies, we laid eggs?',
		emojis: [
			{
				source: emoji.egg,
				count: 7,
			},
			{
				source: emoji.chicken,
				count: 4,
			},
		],
	},
	{
		quote: "Don't be tired, be gay",
		emojis: [
			{
				source: emoji.blobrainbowtrash,
				count: 4,
			},
			{
				source: emoji.rainbowflag,
				count: 7,
			},
			{
				source: emoji.rainbowbear,
				count: 4,
			},
		],
		textStyle: rainbowText,
	},
	{
		quote: ['Are koalas an invasive species?', 'Not anymore'],
		emojis: [
			{
				source: emoji.fblue,
				count: 2,
			},
			{
				source: emoji.koala,
				count: 5,
			},
			{
				source: emoji.firebear,
				count: 4,
			},
		],
	},
	{
		quote: "I didn't know you had friends",
		emojis: [
			{
				source: emoji.fblue,
				count: 4,
			},
			{
				source: emoji.firebear,
				count: 3,
			},
			{
				source: emoji.sadge,
				count: 5,
			},
			{
				source: emoji.pepehands,
				count: 3,
			},
		],
	},
	{
		quote: "Tomorrow I'm just not waking up",
		emojis: [
			{
				source: emoji.nerviousdog,
				count: 5,
			},
			{
				source: emoji.rip,
				count: 3,
			},
			{
				source: emoji.skull,
				count: 3,
			},
			{
				source: emoji.sadcat2speed,
				count: 1,
			},
			{
				source: emoji.life,
				count: 2,
			},
			{
				source: emoji.catok,
				count: 2,
			},
		],
	},
	{
		quote: [
			'I have something next time we get B C',
			'**Betty Crocker**',
			'God damn it',
		],
		emojis: [
			{
				source: emoji.yoshiprave,
				count: 4,
			},
			{
				source: emoji.crackeyes,
				count: 3,
			},
			{
				source: emoji.hmm,
				count: 4,
			},
			{
				source: emoji.catgag,
				count: 5,
			},
		],
	},
	{
		quote: "I mean, if we don't exist (**Aussies**) you don't have any friends",
		emojis: [
			{
				source: emoji.fblue,
				count: 3,
			},
			{
				source: emoji.fkey,
				count: 2,
			},
			{
				source: emoji.firebear,
				count: 3,
			},
			{
				source: emoji.sadcat,
				count: 2,
			},
			{
				source: emoji.saddog,
				count: 1,
			},
			{
				source: emoji.sadcat2speed,
				count: 1,
			},
			{
				source: emoji.skull,
				count: 2,
			},
			{
				source: emoji.worryvanish,
				count: 2,
			},
		],
	},
];
