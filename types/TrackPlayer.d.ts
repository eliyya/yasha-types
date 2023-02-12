import EventEmitter from 'node:events'

declare class Subscription {
    // properties
    connection: any
    player: any

    // constructor
    constructor(connection: any, player: any)

    // methods
    unsubscribe(): any
}

declare class TrackPlayer extends EventEmitter {
    // properties
    normalize_volume: any
    external_encrypt: any
    external_packet_send: any
    last_error: any
    track: any
    stream: any
    subscriptions: any
    play_id: any
    silence_frames_interval: any
    silence_frames_left: any
    silence_frames_needed: any
    player: any

    // constructor
    constructor(options: any)

    // methods
    onstatechange(old: any, cur: any): any
    subscribe(connection: any): any
    unsubscribe(subscription: any): any
    unsubscribe_all(): any
    onpacket(packet: any, length: any, frame_size: any): any
    onfinish(): any
    onerror(error: any, code: any, retryable: any): any
    secretbox_ready(): any
    get_connection(): any
    get_connection_data(): any
    get_connection_udp(): any
    init_secretbox(): any
    create_player(start_time?: any): any
    send(buffer: any, frame_size: any, is_silence?: any): any
    start_silence_frames(): any
    stop_silence_frames(): any
    error(error: any, retryable?: any): any
    get_best_stream_one(streams: any): any
    get_best_stream(streams: any): any
    play(track: any): any
    check_destroyed(): any
    hasPlayer(): any
    isPaused(): any
    setPaused(paused?: any): any
    setVolume(volume: any): any
    setBitrate(bitrate: any): any
    setRate(rate: any): any
    setTempo(tempo: any): any
    setTremolo(depth: any, rate?: any): any
    setEqualizer(eqs: any): any
    seek(time: any): any
    getTime(): any
    getDuration(): any
    getFramesDropped(): any
    getTotalFrames(): any
    isCodecCopy(): any
    stop(): any
    destroy_player(): any
    cleanup(): any
    destroy(): any

    // async methods
    load_streams(): Promise<any>
    start(): Promise<any>
}

export default TrackPlayer
