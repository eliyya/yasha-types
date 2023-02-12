import Youtube from './types/api/Youtube'
import Soundcloud from './types/api/Soundcloud'
import Spotify from './types/api/Spotify'
import Source from './types/Source'
import Track from './types/Track'
import TrackPlayer from './types/TrackPlayer'

export const api: {
    Youtube: typeof Youtube
    Soundcloud: typeof Soundcloud
    Spotify: typeof Spotify
}

export { Source, Track, TrackPlayer }
export const VoiceConnection: any
