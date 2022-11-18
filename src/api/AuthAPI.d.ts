import BaseAPI from './BaseAPI';
import { User } from './UsersAPI';
export interface SignInData {
    login: string;
    password: string;
}
export interface SignUpData {
    first_name: string;
    second_name: string;
    login: string;
    email: string;
    password: string;
    phone: string;
}
export declare class AuthAPI extends BaseAPI {
    constructor();
    signin(data: SignInData): Promise<void>;
    signup(data: SignUpData): Promise<void>;
    read(): Promise<User>;
    logout(): Promise<void>;
    create: undefined;
    update: undefined;
    delete: undefined;
}
declare const _default: AuthAPI;
export default _default;
