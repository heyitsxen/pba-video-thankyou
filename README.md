# PBA 6th Year Aniversary Videos

I created this project to create a aniversary video and say thanks for everyone choosing to chill in our Discord server which hit it's 6th year in November 2022. It's a rare occasion when a server stays this active for so long!

It was a project to play around with React Remotion and practice web animations... but also why does Adobe Creative Cloud cost so much per month :saddog:

# TODO:

- fix absolute imports
- fix webp typescript warning
- upgrade breaks emojis, find out why

# Commands

**Install Dependencies**

```console
yarn
```

**Start Preview**

```console
yarn start
```

**Render video**

```console
yarn build-pba
yarn build-quotes
```

**Upgrade Remotion**

```console
yarn run upgrade
```

# Quickstart

There are a few files that need changing before starting. I did not upload the music (not mine) used in this project, please check below for the original sources. Most of the quotes I used for this project are private and not commited (and totally not nsfw or degenerate :nerviousdog:). There is a template file instead.

1. Navigate to folder `src/Data/` and rename `_quotes.ts` to `quotes.ts`
2. Modify the playlist in the following files: `src/_PBA.tsx` and `src/_QuotesComp.tsx` ~ Remove/Rename the song names and duration (in seconds)
3. In terminal run `yarn start` to run the video preview

# Tools

## FRAMES_PER_SECOND

I recommend changing the frames here, as alot of components rely on this variabale. I have tried to reduce the amount of importing by using the inbuilt remotion hook for FPS but the hook can only be used in components :shrug:

```
export const FRAME_PER_SECOND = 30;   // fps as an INTIGER
```

## compileScenes()

I created this component to automatically generate scenes. It makes each scene have the same properties (for this case, I have a fade in and fade out aswell as centering child elements) which is to reduce code bloat in the JSX. The trade of is each one is identical and may be very repetitive, but I'm kinda lazy soooo...

It can be located in the `src/utils.tsx` file. It uses an array of Scene type objects to create multiple scenes in sequence. Check the Scene interface in the file `src/Scenes/index.js` where all the scenes are imported. You can chain `compileScenes` by passing in a start frame as the 2nd parameter.

```
// Scene object passed into compileScenes
export const pbaScenes: Scene[] = [
	{
		name: 'Hero',     // name for the editer as a STRING
		Component: Hero,  // component scene as a REACT.NODE
		duration: 13.5,   // duration in seconds as NUMBER
	},
	{
		name: 'Celebration',
		Component: Celebration,
		duration: 8,
	},
	{
		name: 'Outro',
		Component: Outro,
		duration: 8,
		componentProps: {  // optional props into the component
			tracklist: ['Waking up'],
		},
	},
}
```

## Music

You can add the music in the file `public` folder on the root directory. You do not need to refrence the file itself in JS but just the file name.

The custom Music component takes in a playlist as an array of objects with the key-values:

- **songFile**: the file name with the `.mp3` tag on the end as STRING
  - you do not need to use a `.mp3` file as remotion supports all Chromium audio formats
  - I do use a `string.replace` function is used for naming to make it look nicer in the viewer, thats about it.
- **duration**: duration of the song in seconds as INTIGER
  - you can put any duration, it will put a fade out at that duration (check the component for the duration)

```
// example playlist
const playlist = [
	{
		songFile: 'SleepyAndComfy.mp3',  // song name as a STRING
		duration: 134,                   // song duration in seconds as an INTIGER
	},
	{
		songFile: 'RoutineNumber2.mp3',
		duration: 122,
	},
	{
		songFile: 'LightsOut.mp3',
		duration: 117,
	},
];
```

# Sources

Be aware that all of these assets in `src/Assets` do not origin from me. Please check for their sources.

## Icons/Images

- [Pointer: by Becca from Noun Project](https://thenounproject.com/icon/pointer-2559539/)
- [Halloween Ghost Sticker by KiraKira](https://giphy.com/stickers/transparent-dv0E50gKjjaRzbcltM)
- [Minecraft Background](https://www.polygon.com/2019/11/7/20952214/minecraft-most-important-game-of-the-decade-2010)
- Ballon clipart TBA

## Emojis

Alot of emojis come from diffrent servers. I'll gradually add them as I can find the original sources/refrences. SVGs emojis are Discord defaults.

- warbongo - saltedxiv
- kawaibear, pizzabear, popobear, sadbear, rainbowbear - [based of the pobear meme](https://knowyourmeme.com/memes/polar-bear-gif)
- report, sussy - based of amongus
- bunboi, yoshiprave, dontthinkdrink, playdead, keikoncerned, brutesussy, bahamautlick - FFXIV related
- honk, honk, honkgil, honkhonk, peacewasneveranoption - Untitlted Goose Game
- dodolove - Monster Hunter
- toxic - Pepe Universe | Emotes
- nakcatirl - actual irl cat (very fluffy and is a the king)
- boing, bkiss - Bugcat Capoo
- sussy, report - Among Us
- wutcat, wutkaren - [Women yelling at a cat meme](https://en.wikipedia.org/wiki/Woman_yelling_at_a_cat)

## Game logos

- [Minecraft](https://logos-world.net/minecraft-logo/)
- [World of Warcraft](https://logos-world.net/world-of-warcraft-logo/)
- [Guild Wars 2](https://logos-world.net/guild-wars-logo/)
- [Dungeons & Dragons](https://logos-world.net/dnd-dungeons-dragons-logo/)
- [Seas of Theives](https://logos-world.net/sea-of-thieves-logo/)
- [OSU!](https://logos-world.net/osu-logo/)
- [Terraria](https://terraria.fandom.com/wiki/Logo)
- [Diablo 3](https://www.pngmart.com/image/504793)
- [Apex Legends](https://logos-world.net/apex-legends-logo/)
- [Elden Ring](https://en.bandainamcoent.eu/elden-ring/elden-ring)
- [FFXIV](https://finalfantasy.fandom.com/wiki/Final_Fantasy_XIV)
- [Overwatch](https://www.nicepng.com/ourpic/u2w7r5i1e6o0q8w7_overwatch-logo-unchained-podcast/)
- [Genshin Impact](https://www.hoyolab.com/article/63716)

## Music

All music that I used in the videos are from [🎤 Going Live 🖥️ by Walking Dog](https://www.youtube.com/watch?v=8IiVnsHT7QA). The files for the audio are not in this repo, the ones I used are from a [purchased Bandcamp download](https://walkingdog.bandcamp.com/album/going-live-2).

They do provide DMCA/ROYALTY FREE music. Consider supporting this artist on their [Bandcamp](https://walkingdog.bandcamp.com/).

- **PBA**
  - Waking Up - Track 1
- **Quotes of Time**
  - Sleepy And Comfy - Track 29
  - Routine Number 2 - Track 27
  - Lights Out - Track 28

# Remotion stuff

## Links

- [Website](https://www.remotion.dev/)
- [Docs](https://www.remotion.dev/docs/)

## License

Be aware that for some entities a company license is needed. You can read [the official terms here](https://github.com/remotion-dev/remotion/blob/main/LICENSE.md).

Remotion is free to use for individuals and non-profit but check the license before doing anything.
