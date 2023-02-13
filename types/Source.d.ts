// const SourceError = require('./SourceError')

declare class APISource {
    // properties
    name: any
    api: any
    Track: any
    Results: any
    Playlist: any

    new(api: any): APISource

    // async methods
    resolve(match?: any): Promise<any>
    get(id?: any): Promise<any>
    getStreams(id?: any): Promise<any>
    search(query?: any): Promise<any>
    playlistOnce(id?: any): Promise<any>
    playlist(id: any, length?: any): Promise<any>

    // methods
    match(content?: any): any
    weak_match(content?: any): any
    matches(content?: any): any
}

declare class Youtube extends APISource {
    Music: any
    id_regex: any
    api: any

    // methods
    weak_match(id: any): any
    match(content: any): any
    setCookie(cookie: any): any

    // async methods
    resolve(match: any): Promise<any>
    weak_resolve(match: any): Promise<any>
    search(query: any, continuation?: any): Promise<any>
    playlistOnce(id: any, start?: any): Promise<any>
}

declare class Soundcloud extends APISource {
    // methods
    match(content: any): any

    // async methods
    resolve(match: any): Promise<any>
    search(query: any, offset?: any, length?: any): Promise<any>
    playlistOnce(id?: any, offset?: any, length?: any): Promise<any>
}

declare class Spotify extends APISource {
    // methods
    match(content: any): any
    setCookie(cookie: any): any

    // async methods
    resolve(match): Promise<any>
    search(query: any, offset?: any, length?: any): Promise<any>
    playlistOnce(id: any, offset?: any, length?: any): Promise<any>
    albumOnce(id: any, offset?: any, length?: any): Promise<any>
}

declare class AppleMusic extends APISource {
    // methods
    match(content: any): any

    // async methods
    resolve(match: any): Promise<any>
    search(query: any, offset?: any, length?: any): Promise<any>
    playlistOnce(id: any, offset?: any, length?: any): Promise<any>
    albumOnce(id: any, offset?: any, length?: any): Promise<any>
}

declare class File extends APISource {
    // methods
    resolve(content: any): any
}

declare class Source {
    static resolve(input: any, weak?: any): any
    static File: File
    static AppleMusic: AppleMusic
    static Spotify: Spotify
    static Soundcloud: Soundcloud
    static Youtube: Youtube
    static Error: any
}

export default Source
