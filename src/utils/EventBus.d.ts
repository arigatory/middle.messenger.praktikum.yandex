type Handler<A extends any[] = unknown[]> = (...args: A) => void;
type MapInterface<P> = P[keyof P];
export declare class EventBus<E extends Record<string, string> = Record<string, string>, Args extends Record<MapInterface<E>, any[]> = Record<string, any[]>> {
    private readonly listeners;
    on<Event extends MapInterface<E>>(event: Event, callback: Handler<Args[Event]>): void;
    off<Event extends MapInterface<E>>(event: Event, callback: Handler<Args[Event]>): void;
    emit<Event extends MapInterface<E>>(event: Event, ...args: Args[Event]): void;
}
export {};
