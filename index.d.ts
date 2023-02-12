import Youtube from './types/api/Youtube'
import Soundcloud from './types/api/Soundcloud'
import Spotify from './types/api/Spotify'
import Source from './types/Source'
import Track from './types/Ttrack'

export const api: {
    Youtube: typeof Youtube
    Soundcloud: typeof Soundcloud
    Spotify: typeof Spotify
}

export { Source, Track }
export const TrackPlayer: any
export const VoiceConnection: any
/**
module.exports = {
	Source: require('./src/Source'),
	Track: require('./src/Track'),
	TrackPlayer: require('./src/TrackPlayer'),
	VoiceConnection: require('./src/VoiceConnection'),
};
 */
