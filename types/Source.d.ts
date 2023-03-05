// const SourceError = require('./SourceError')
import SoundcloudAPI from './api/Soundcloud'
import YoutubeAPI, { YoutubePlaylist, YoutubeResults, YoutubeStreams, YoutubeTrack } from './api/Youtube'
import SpotifyAPI from './api/Spotify'
// TODO: ADD AppleMusicAPI & FileAPI

// TODO: ADD MISSING TYPES

declare class APISource<T extends 'Youtube' | 'Spotify' | 'Soundcloud' | 'AppleMusic' | 'File'> {
    // properties
    name: T
    api: T extends 'Youtube'
        ? typeof YoutubeAPI
        : T extends 'Spotify'
        ? typeof SpotifyAPI
        : T extends 'Soundcloud'
        ? typeof SoundcloudAPI
        : any
    Track: T extends 'Youtube'
        ? typeof YoutubeAPI.Track
        : T extends 'Spotify'
        ? typeof SpotifyAPI.Track
        : T extends 'Soundcloud'
        ? typeof SoundcloudAPI.Track
        : any
    Results: T extends 'Youtube'
        ? typeof YoutubeAPI.Results
        : T extends 'Spotify'
        ? typeof SpotifyAPI.Results
        : T extends 'Soundcloud'
        ? typeof SoundcloudAPI.Results
        : any
    Playlist: T extends 'Youtube'
        ? typeof YoutubeAPI.Playlist
        : T extends 'Spotify'
        ? typeof SpotifyAPI.Playlist
        : T extends 'Soundcloud'
        ? typeof SoundcloudAPI.Playlist
        : any

    new(api: T): APISource<T>

    // async methods
    resolve(match?: any): Promise<null>
    // ?
    get(id: string): Promise<T extends 'Youtube' ? YoutubeTrack : any>
    // ?
    getStreams(id: any): Promise<T extends 'Youtube' ? YoutubeStreams : any>
    search(query?: any): Promise<T extends 'Youtube' ? YoutubeResults : any>
    playlistOnce(id?: any): Promise<any>
    // ?
    playlist(id: any, length?: any): Promise<any>

    // methods
    match(content?: any): any
    private weak_match(content?: any): any
    matches(content?: any): boolean
}

declare class Youtube extends APISource<'Youtube'> {
    // TODO: check this.api.Music type
    Music: any
    id_regex: RegExp

    // methods
    private weak_match(id: string): { id: string } | null
    match(content: URL): { id: string } | null
    setCookie(cookie: string): void

    // async methods
    // ?
    resolve(match: { id: string } | { list: string }): Promise<any>
    // ?
    private weak_resolve(match: { id: string } | { list: string }): Promise<any>
    // ?
    search(query: any, continuation?: any): Promise<YoutubeResults>
    playlistOnce(id: string, start?: number): Promise<YoutubePlaylist>
}

declare class Soundcloud extends APISource<'Soundcloud'> {
    // methods
    // ?
    match(content: URL): any

    // async methods
    // ?
    resolve(match: any): Promise<any>
    // ?
    search(query: any, offset?: any, length?: any): Promise<any>
    // ?
    playlistOnce(id?: any, offset?: any, length?: any): Promise<any>
}

declare class Spotify extends APISource<'Spotify'> {
    // methods
    // ?
    match(content: URL): any
    setCookie(cookie: string): void

    // async methods
    // ?
    resolve(match: { track: any } | { playlist: any } | { album: any }): Promise<any>
    // ?
    search(query: any, offset?: any, length?: any): Promise<any>
    // ?
    playlistOnce(id: any, offset?: any, length?: any): Promise<any>
    // ?
    albumOnce(id: any, offset?: any, length?: any): Promise<any>
}

declare class AppleMusic extends APISource<'AppleMusic'> {
    // methods
    // ?
    match(content: URL): any

    // async methods
    // ?
    resolve(match: { track: any } | { playlist: any } | { album: any }): Promise<any>
    // ?
    search(query: any, offset?: any, length?: any): Promise<any>
    // ?
    playlistOnce(id: any, offset?: any, length?: any): Promise<any>
    // ?
    albumOnce(id: any, offset?: any, length?: any): Promise<any>
}

declare class File extends APISource<'File'> {
    // methods
    // ?
    resolve(content: URL): any
}

declare class Source {
    // ?
    static resolve(input: any, weak?: boolean): any
    static File: File
    static AppleMusic: AppleMusic
    static Spotify: Spotify
    static Soundcloud: Soundcloud
    static Youtube: Youtube
    static Error: any
}

export default Source
