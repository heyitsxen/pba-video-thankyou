import logoApex from '../Assets/image/Apex-Legends-Logo.png';
import logoDiablo from '../Assets/image/Diablo-3-Logo-PNG.png';
import logoDnD from '../Assets/image/DnD-Logo.png';
import logoEldenRing from '../Assets/image/eldenring_new.webp';
import logoFFXIVARR from '../Assets/image/FFXIV_logo.webp';
import logoFFXIVHeavensward from '../Assets/image/FFXIV_Heavensward.webp';
import logoFFXIVStormblood from '../Assets/image/Ffxiv-stormblood-transparent.webp';
import logoFFXIVShadowbringers from '../Assets/image/FFXIV_Shadowbringers.webp';
import logoFFXIVEndwalker from '../Assets/image/FFXIV_Endwalker.webp';
import logoGW2 from '../Assets/image/Guild-Wars-Logo.png';
import logoOSU from '../Assets/image/Osu-Logo.png';
import logoOverwatch from '../Assets/image/overwatch-logo.png';
import logoSeaOfThieves from '../Assets/image/Sea-Of-Thieves-Logo.png';
import logoTerraria from '../Assets/image/terraria.webp';
import logoWoW from '../Assets/image/World-of-Warcraft-bfa.png';
import logoGenshin from '../Assets/image/genshin.png';

export interface GameProps {
	source: string;
	dimensions: {
		width: number;
		height: number;
	};
	position: {
		x: number;
		y: number;
	};
	scale: number;
}

export const games: GameProps[] = [
	{
		source: logoFFXIVARR,
		dimensions: {
			width: 624,
			height: 470,
		},
		position: {
			x: 50,
			y: 25,
		},
		scale: 0.45,
	},
	{
		source: logoApex,
		dimensions: {
			width: 3840,
			height: 2160,
		},
		position: {
			x: 45,
			y: 80,
		},
		scale: 0.07,
	},
	{
		source: logoGW2,
		dimensions: {
			width: 3840,
			height: 2160,
		},
		position: {
			x: 21,
			y: 56,
		},
		scale: 0.065,
	},
	{
		source: logoTerraria,
		dimensions: {
			width: 486,
			height: 142,
		},
		position: {
			x: 74,
			y: 74,
		},
		scale: 0.8,
	},
	{
		source: logoFFXIVHeavensward,
		dimensions: {
			width: 500,
			height: 400,
		},
		position: {
			x: 12,
			y: 35,
		},
		scale: 0.6,
	},
	{
		source: logoOverwatch,
		dimensions: {
			width: 3840,
			height: 2160,
		},
		position: {
			x: 37,
			y: 7,
		},
		scale: 0.1,
	},
	{
		source: logoOSU,
		dimensions: {
			width: 3840,
			height: 2160,
		},
		position: {
			x: 92.5,
			y: 90,
		},
		scale: 0.05,
	},
	{
		source: logoFFXIVStormblood,
		dimensions: {
			width: 980,
			height: 520,
		},
		position: {
			x: 68,
			y: 12,
		},
		scale: 0.3,
	},
	{
		source: logoDiablo,
		dimensions: {
			width: 1000,
			height: 776,
		},
		position: {
			x: 26,
			y: 27,
		},
		scale: 0.25,
	},
	{
		source: logoSeaOfThieves,
		dimensions: {
			width: 3840,
			height: 2160,
		},
		position: {
			x: 10,
			y: 10,
		},
		scale: 0.06,
	},
	{
		source: logoWoW,
		dimensions: {
			width: 3840,
			height: 2160,
		},
		position: {
			x: 89,
			y: 15,
		},
		scale: 0.07,
	},
	{
		source: logoFFXIVShadowbringers,
		dimensions: {
			width: 1000,
			height: 566,
		},
		position: {
			x: 20,
			y: 86,
		},
		scale: 0.4,
	},
	{
		source: logoDnD,
		dimensions: {
			width: 3840,
			height: 2160,
		},
		position: {
			x: 80,
			y: 33,
		},
		scale: 0.07,
	},
	{
		source: logoEldenRing,
		dimensions: {
			width: 800,
			height: 267,
		},
		position: {
			x: 70,
			y: 92,
		},
		scale: 0.4,
	},
	{
		source: logoFFXIVEndwalker,
		dimensions: {
			width: 1000,
			height: 500,
		},
		position: {
			x: 85,
			y: 55,
		},
		scale: 0.45,
	},
	{
		source: logoGenshin,
		dimensions: {
			width: 1956,
			height: 740,
		},
		position: {
			x: 10,
			y: 67,
		},
		scale: 0.125,
	},
];
