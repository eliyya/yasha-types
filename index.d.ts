import Youtube from './types/api/Youtube'
import type Soundcloud from './types/api/Soundcloud'

export const api: {
    Youtube: typeof Youtube
    Soundcloud: typeof Soundcloud
    Spotify
}

export const Source: any
export const Track: any
export const TrackPlayer: any
export const VoiceConnection: any
/**
module.exports = {
	api: {
		Soundcloud: require('./src/api/Soundcloud'),
		Spotify: require('./src/api/Spotify')
	},

	Source: require('./src/Source'),
	Track: require('./src/Track'),
	TrackPlayer: require('./src/TrackPlayer'),
	VoiceConnection: require('./src/VoiceConnection'),
};
 */
