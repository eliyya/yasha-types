class YoutubeAPI {
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

    // constructor
    new(): YoutubeAPI

    // async methods
    api_request(path: any, body?: any, query?: any, origin?: any): Promise<any>
    get(id: any): Promise<any>
    get_streams(id: any): Promise<any>
    playlist_once(id: any, start?: any): Promise<any>
    playlist(id: any, limit: any): Promise<any>
    search(query: any, continuation?: any): Promise<any>
    track_match_lookup(track: any): Promise<any>
    track_match(track: any): Promise<any>

    // methods
    set_cookie(cookiestr?: any): any
    string_word_match(big: any, small: any): any
    track_match_score(track: any, result: any): any
    track_match_best(results: any, track: any): any
    track_match_best_result(results: any, track: any): any
}

const api: YoutubeAPI
export default api

class YoutubeMusic {
    // properties
    innertube_client: {
        clientName: string
        clientVersion: string
        gl: string
        hl: string
    }
    innertube_key: string

    // constructor
    new(): YoutubeMusic

    // getters
    get cookie(): string
    get sapisid(): string

    // async methods
    api_request(path: any, body?: any, query?: any): Promise<any>
    search(search: any, continuation?: any, params?: any): Promise<any>
}

export const Music: YoutubeMusic

class YoutubeTrack extends Track {
    // properties
    plattform: 'Youtube'

    // constructor
    new(): YoutubeTrack

    // getters
    get url(): string

    // async methods
    fetch(): Promise<any>
    getStreams(): Promise<any>

    // methods
    from(video_details: any, author: any, streams: any): any
    from_search(track: any): any
    from_playlist(track: any): any
}

export const Track: typeof YoutubeTrack

class YoutubeResults extends TrackPlaylist {
    // properties
    id: string

    // async methods
    next(): Promise<any>

    // methods
    process(body: any): any
    extract_tracks(list: any): any
    set_continuation(cont: any): any
}

export const Results: typeof YoutubePlaylist

class YoutubePlaylist extends TrackPlaylist {
    // properties
    id: string

    // getters
    get url(): string

    // async methods
    next(): Promise<any>

    // methods
    process(id: any, data: any, offset: any): any
}

export const Playlist: typeof YoutubePlaylist
