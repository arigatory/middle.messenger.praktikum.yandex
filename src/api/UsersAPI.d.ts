import BaseAPI from './BaseAPI';
export interface User {
    id: number;
    first_name: string;
    second_name: string;
    display_name: string;
    login: string;
    email: string;
    phone: string;
    avatar: string;
}
export interface ProfileData {
    first_name: string;
    second_name: string;
    display_name: string;
    login: string;
    email: string;
    phone: string;
}
export interface SearchUserData {
    login: string;
}
export interface ChangePasswordsData {
    oldPassword: string;
    newPassword: string;
}
export declare class UsersAPI extends BaseAPI {
    constructor();
    readById(userId: number): Promise<User>;
    changePassword(data: ChangePasswordsData): Promise<void>;
    updateProfile(data: User): Promise<void>;
    read: undefined;
    create: undefined;
    update: undefined;
    delete: undefined;
}
declare const _default: UsersAPI;
export default _default;
