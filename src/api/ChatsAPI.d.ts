import BaseAPI from './BaseAPI';
import { User } from './UsersAPI';
export interface ChatInfo {
    id: number;
    title: string;
    avatar: string;
    unread_count: number;
    last_message: {
        user: User;
        time: string;
        content: string;
    };
}
export declare class ChatsAPI extends BaseAPI {
    constructor();
    create(title: string): Promise<void>;
    delete(id: number): Promise<unknown>;
    read(): Promise<ChatInfo[]>;
    getUsers(id: number): Promise<Array<User & {
        role: string;
    }>>;
    addUsers(id: number, users: number[]): Promise<unknown>;
    getToken(id: number): Promise<string>;
    update: undefined;
}
declare const _default: ChatsAPI;
export default _default;
