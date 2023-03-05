import { Track as TrackBase, TrackImage, TrackResults, TrackPlaylist } from '../Track'

declare class SpotifyTrack extends TrackBase {
    // properties
    platform: 'Spotify'

    // grtters
    get url(): any

    // async methods
    fetch(): Promise<any>
    getStreams(): Promise<any>

    // methods
    from(track: any, artist: any): any
}

declare class SpotifyResults extends TrackResults {
    // properties
    query: any
    start: any

    // async methods
    next(): Promise<any>

    // methods
    private set_continuation(query: any, start: any): any
}

declare class SpotifyPlaylist extends TrackPlaylist {
    // properties
    type: any
    id: any
    start: any

    // constructtor

    // getters
    get url(): any

    // async methods
    next(): Promise<any>

    // methods
    set(type: any, id: any): any
    private set_continuation(start: any): any
}

declare class SpotifyAPI {
    // properties
    token: any
    reloading: any
    needs_reload: any
    account_data: any

    // inject
    Track: typeof SpotifyTrack
    Results: typeof SpotifyResults
    Playlist: typeof SpotifyPlaylist

    // async methods
    private list_once(type: any, id: any, start?: any, length?: any): Promise<any>
    private playlist_once(id: any, start?: any, length?: any): Promise<any>
    private album_once(id: any, start?: any, length?: any): Promise<any>
    search(query: any, start?: any, length?: any): Promise<any>
    list(type: any, id: any, limit?: any): Promise<any>
    private api_request(path: any, options?: any): Promise<any>
    playlist(id: any, length?: any): Promise<any>
    album(id: any, length?: any): Promise<any>
    private get_streams(id: any): Promise<any>
    reload(force?: any): Promise<any>
    get(id?: any): Promise<any>
    load(): Promise<any>

    // methods
    private check_valid_id(id: any): any
    private set_cookie(cookie: any): any
    prefetch(): any
}

declare const api: SpotifyAPI
export default api
export const Track: typeof SpotifyTrack
export const Results: typeof SpotifyResults
export const Playlist: typeof SpotifyPlaylist
