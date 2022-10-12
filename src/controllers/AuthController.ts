import API, { AuthAPI, SignInData, SignUpData } from '../api/AuthAPI';

export class AuthController {
  private readonly api: AuthAPI;

  constructor() {
    this.api = API;
  }

  async signin(data: SignInData) {
    await this.api.signin(data);
  }
  
  public async signup(data: SignUpData) {
    await this.api.signup(data);
  }
  
  async fetchUser() {
    await this.api.read();
  }
  
  async logout() {
    await this.api.logout();
  }
}

export default new AuthController();