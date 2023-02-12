import { Track as TrackBase, TrackImage, TrackResults, TrackPlaylist, TrackStream, TrackStreams } from '../Track'

declare class SoundcloudTrack extends TrackBase {
    // properties
    platform: 'Soundcloud'
    permalink_url: any

    // getters
    get url(): any

    // async methods
    fetch(): Promise<any>
    getStreams(): Promise<any>

    // methods
    from(track: any): any
    get_thumbnails(track: any): any
}

declare class SoundcloudResults extends TrackResults {
    // properties
    query: any
    start: any

    // async methods
    next(): Promise<any>

    // methods
    set_continuation(query: any, start: any): any
}

declare class SoundcloudPlaylist extends TrackPlaylist {
    // properties
    permalink_url: any
    id: any
    start: any

    // getters
    get url(): any

    // async methods
    next(): Promise<any>

    // methods
    form(list: any): any
    set_continuation(id: any, start: any): any
}

declare class SoundcloudStream extends TrackStream {
    // properties
    stream_url: any

    // async methods
    getUrl(): Promise<any>
}

declare class SoundcloudStreams extends TrackStreams {
    // methods
    extract_streams(streams: any): any
    from(track: any): any
    expired(): any
    maybeExpired(): any
}

declare class SoundcloudAPI {
    // properties
    client_id: any
    reloading: any

    // injection
    Track: typeof SoundcloudTrack
    Results: typeof SoundcloudResults
    Playlist: typeof SoundcloudPlaylist

    // async methods
    reload(): Promise<any>
    prefetch(): Promise<any>
    load(): Promise<any>
    request(path: any, query?: any): Promise<any>
    api_request(path: any, query: any): Promise<any>
    resolve_playlist(list: any, offset?: any, limit?: any): Promise<any>
    resolve(url: any): Promise<any>
    resolve_shortlink(id: any): Promise<any>
    get(id: any): Promise<any>
    get_streams(id: any): Promise<any>
    search(query: any, offset?: any, limit?: any): Promise<any>
    playlist_once(id, offset?: any, limit?: any): Promise<any>
    playlist(id: any, limit?: any): Promise<any>

    // methods
    check_valid_id(id: any): any
}

declare const api: SoundcloudAPI
export default api
export const Track: typeof SoundcloudTrack
export const Results: typeof SoundcloudResults
export const Playlist: typeof SoundcloudPlaylist
