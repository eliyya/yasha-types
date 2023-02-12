declare class TrackStream {
    url: any
    video: any
    audio: any
    bitrate: any
    duration: any
    container: any
    codecs: any
    constructor(url: any)

    // methods
    setTracks(video: any, audio: any): any
    setBitrate(bitrate: any): any
    setDuration(duration: any): any
    setMetadata(container: any, codecs: any): any
    equals(other: any): any

    // async methods
    getUrl(): Promise<any>
}

declare class TrackStreams extends Array {
    // properties
    volume: any
    live: any
    time: any

    // methods
    set(volume: any, live: any, time: any): any
    expired(): any
    maybeExpired(): any
}

declare class Track {
    // properties
    platform: any
    playable: any
    duration: any
    author: any
    icons: any
    id: any
    title: any
    thumbnails: any
    streams: any

    constructor(platform: any)

    // methods
    setOwner(name: any, icons: any): any
    setMetadata(id: any, title: any, duration: any, thumbnails: any): any
    setStreams(streams: any): any
    setPlayable(playable: any): any
    equals(other: any): any

    // async methods
    fetch(): Promise<any>
    getStreams(): Promise<any>

    // getters
    get url(): any
}

declare class TrackResults extends Array {
    // methods
    next(): any
}

declare class TrackPlaylist extends TrackResults {
    // properties
    title: any
    description: any
    firstTrack: any
    length: any
    splice: any

    // methods
    setMetadata(title: any, description: any): any
    setFirstTrack(track: any): any

    // async methods
    next(): Promise<any>
    load(): Promise<any>

    // getters
    get url(): any
}

declare class TrackImage {
    // properties
    url: any
    width: any
    height: any

    constructor(url: any, width: any, height: any)

    // static methods
    static from(array: any): any
}

export { Track, TrackResults, TrackPlaylist, TrackImage, TrackStream, TrackStreams }
export const track: {
    Track: Track
    TrackResults: TrackResults
    TrackPlaylist: TrackPlaylist
    TrackImage: TrackImage
    TrackStream: TrackStream
    TrackStreams: TrackStreams
}
