import { ChangePasswordsData, User } from '../api/UsersAPI';
export declare class UsersController {
    private readonly _api;
    constructor();
    changePassword(data: ChangePasswordsData): Promise<void>;
    updateProfile(data: User): Promise<void>;
}
declare const _default: UsersController;
export default _default;
