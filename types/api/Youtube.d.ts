import { Track as TrackBase, TrackResults, TrackPlaylist, TrackStream, TrackStreams } from '../Track'
//TODO add types
declare class YoutubeAPI {
    // properties
    innertube_client: {
        clientName: string
        clientVersion: string
        gl: string
        hl: string
    }
    innertube_key: string
    cookie: string
    sapisid: string

    // injected
    Music: YoutubeMusic
    Track: typeof YoutubeTrack
    Results: typeof YoutubeResults
    Playlist: typeof YoutubePlaylist

    // async methods
    api_request(path: string, body?: object, query?: string, origin?: string): Promise<any>
    get(id: string): Promise<YoutubeTrack>
    get_streams(id: string): Promise<YoutubeStreams>
    playlist_once(id: string, start?: number): Promise<YoutubePlaylist>
    playlist(id: string, limit?: number): Promise<YoutubePlaylist>
    search(query: string, continuation?: string): Promise<YoutubeResults>
    track_match_lookup(track: YoutubeMusicTrack): Promise<YoutubeMusicTrack>
    // ?
    track_match(track: any): Promise<YoutubeStreams | YoutubeMusicTrack>

    // methods
    set_cookie(cookiestr?: string): void
    string_word_match(big: string, small: string): number
    track_match_score(track: YoutubeMusicTrack, result: YoutubeMusicTrack): number
    // ?
    track_match_best(results: any[], track: YoutubeMusicTrack): YoutubeMusicTrack | null
    track_match_best_result(results: YoutubeMusicResults[], track: YoutubeMusicTrack): YoutubeMusicTrack
}

declare class YoutubeMusic {
    // properties
    innertube_client: {
        clientName: string
        clientVersion: string
        gl: string
        hl: string
    }
    innertube_key: string

    // getters
    get cookie(): string
    get sapisid(): string

    // async methods
    api_request(path: any, body?: any, query?: any): Promise<any>
    search(search: any, continuation?: any, params?: any): Promise<any>
}

declare class YoutubeTrack extends TrackBase {
    // properties
    plattform: 'Youtube'

    // getters
    get url(): URL

    // async methods
    fetch(): Promise<any>
    getStreams(): Promise<any>

    // methods
    from(video_details: any, author: any, streams: any): any
    from_search(track: any): any
    from_playlist(track: any): any
}

declare class YoutubeResults extends TrackResults {
    // properties
    continuation: any

    // async methods
    next(): Promise<any>

    // methods
    process(body: any): any
    extract_tracks(list: any): any
    set_continuation(cont: any): any
}

declare class YoutubePlaylist extends TrackPlaylist {
    // properties
    id: string
    next_offset: any

    // getters
    get url(): string

    // async methods
    next(): Promise<any>

    // methods
    process(id: any, data: any, offset: any): any
}

declare class YoutubeStream extends TrackStream {
    itag: any
    constructor(url: any, itag: any)
    equals(other: any): any
}

declare class YoutubeStreams extends TrackStreams {
    expire: any
    from(start: any, playerResponse: any): this
    expired(): any
    extract_streams(streams: any, adaptive?: any): any
}

declare class YoutubeMusicTrack extends YoutubeTrack {
    type: any
    explicit: any
    artists: any

    parse_metadata(has_type: any, metadata: any): any
    from_search(track: any, has_type?: any): any
    from_section(track: any): any
}

declare class YoutubeMusicResults extends TrackResults {
    top_result: any
    songs: any
    continuation: any
    browse: any
    query: any

    process(body: any): any
    process_section(section: any): any
    from_section(list: any): any
    process_once(body: any): any
    extract_tracks(list: any): any
    set_continuation(cont: any): any
    set_browse(query: any, params: any): any

    next(): Promise<any>
}

declare const api: YoutubeAPI
export default api
// export const Music: YoutubeMusic
// export const Track: typeof YoutubeTrack
// export const Results: typeof YoutubePlaylist
// export const Playlist: typeof YoutubePlaylist
export { YoutubeTrack, YoutubeStreams, YoutubePlaylist, YoutubeResults }
