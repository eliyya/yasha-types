import Youtube from './types/api/Youtube'
import Soundcloud from './types/api/Soundcloud'
import Spotify from './types/api/Spotify'
import Source from './types/Source'
import Track from './types/Track'
import TrackPlayer from './types/TrackPlayer'
import VoiceConnection from './types/VoiceConnection'

declare const api: {
    Youtube: typeof Youtube
    Soundcloud: typeof Soundcloud
    Spotify: typeof Spotify
}

export { Source, Track, TrackPlayer, VoiceConnection, api }

declare const yasha: {
    Source: typeof Source
    Track: typeof Track
    TrackPlayer: typeof TrackPlayer
    VoiceConnection: typeof VoiceConnection
    api: typeof api
}

export default yasha
