import HTTPTransport from '../utils/HTTPTransport';
export default abstract class BaseAPI {
    protected http: HTTPTransport;
    protected constructor(endpoint: string);
    abstract create?(data: unknown): Promise<unknown>;
    abstract read?(identifier?: string): Promise<unknown>;
    abstract update?(identifier: string, data: unknown): Promise<unknown>;
    abstract delete?(identifier: number): Promise<unknown>;
}
