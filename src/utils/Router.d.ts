import Block from './Block';
export interface BlockConstructable<P extends Record<string, any> = any> {
    new (props: P): Block<P>;
}
declare class Router {
    private readonly rootQuery;
    private static __instance;
    private routes;
    private currentRoute;
    private history;
    private defaultNotFoundPage?;
    constructor(rootQuery: string);
    setNotFoundPage(notFoundPage: Block): void;
    use(pathname: string, block: BlockConstructable): this;
    start(): void;
    private _onRoute;
    go(pathname: string): void;
    back(): void;
    forward(): void;
    private getRoute;
}
declare const _default: Router;
export default _default;
