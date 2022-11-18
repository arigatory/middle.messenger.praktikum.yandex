import { SignInData, SignUpData } from '../api/AuthAPI';
export declare class AuthController {
    private readonly api;
    constructor();
    signin(data: SignInData): Promise<void>;
    signup(data: SignUpData): Promise<void>;
    fetchUser(): Promise<void>;
    logout(): Promise<void>;
}
declare const _default: AuthController;
export default _default;
