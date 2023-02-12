import {
    VoiceConnectionStatus,
    VoiceConnectionDisconnectReason,
    VoiceConnection as VoiceConnectionBase,
} from '@discordjs/voice'
declare const c: VoiceConnectionBase

declare class VoiceConnection extends VoiceConnectionBase {
    // properties
    guild: any
    connect_timeout: any
    connected: any
    promise_resolve: any
    promise_reject: any
    timeout: any
    promise: any

    // constructor
    constructor(channel: any, options: any)

    // sttatic methods
    static disconnect_reason(reason: any): any
    static get(guild: any): any
    static disconnect(guild: any, options?: any): any

    // injection
    static Status: VoiceConnectionStatus

    // static async methods
    static connect(channel: any, options?: any): Promise<any>

    // methods
    rejoin_id(channelId: any): any
    rejoin(channel: any): any
    ready(): any
    addStatePacket(packet: any): any
    onNetworkingError(error: any): any
    handle_state_change(state: any): any
    destroy(adapter_available?: any): any
    disconnect(): any

    // async methods
    await_connection(): Promise<any>

    // setters
    set state(state: any)

    // getters
    get state(): any
}

export default VoiceConnection
