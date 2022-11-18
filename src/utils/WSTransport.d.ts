import { EventBus } from './EventBus';
export declare enum WSTransportEvents {
    Connected = "connected",
    Error = "error",
    Message = "message",
    Close = "close"
}
export default class WSTransport extends EventBus {
    private url;
    private _socket;
    constructor(url: string);
    send(data: unknown): void;
    connect(): Promise<void>;
    close(): void;
    private setupPing;
    private subscribe;
}
