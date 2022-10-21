// https://fossheim.io/writing/posts/css-text-gradient/
export const rainbowText = {
	backgroundImage: `linear-gradient(
        45deg,
        #CA4246 16.666%, 
        #E16541 30%, 
        #F18F43 43.33%, 
        #8B9862 56.666%, 
        #476098 70%, 
        #A7489B 83.333%)`,
	backgroundSize: '100%',
	backgroundRepeat: 'repeat',
	WebkitBackgroundClip: 'text',
	WebkitTextFillColor: 'transparent',
	fontWeight: 700,
};
