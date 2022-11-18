export declare enum Method {
    Get = "Get",
    Post = "Post",
    Put = "Put",
    Patch = "Patch",
    Delete = "Delete"
}
export default class HTTPTransport {
    static API_URL: string;
    protected endpoint: string;
    constructor(endpoint: string);
    get<Response>(path?: string): Promise<Response>;
    post<Response = void>(path: string, data?: unknown): Promise<Response>;
    put<Response = void>(path: string, data: unknown): Promise<Response>;
    patch<Response = void>(path: string, data: unknown): Promise<Response>;
    delete<Response>(path: string, data?: unknown): Promise<Response>;
    private request;
}
