import API, { AuthAPI, SignInData, SignUpData } from '../api/AuthAPI';
import store from '../utils/Store';
import router from '../utils/Router';

export class AuthController {
  private readonly api: AuthAPI;

  constructor() {
    this.api = API;
  }

  async signin(data: SignInData) {
    await this.api.signin(data);

    router.go('/profile');
  }

  public async signup(data: SignUpData) {
    try {
      await this.api.signup(data);
      await this.fetchUser();
  
      router.go('/profile');      
    } catch (error) {
      alert(error);
      // store.set('error', {text: error.message});
    }

  }

  async fetchUser() {
    const user = await this.api.read();
    if (!user.avatar)
      user.avatar = 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250'
    store.set('user', user);
  }

  async logout() {
    await this.api.logout();
    router.go('/');
  }
}

export default new AuthController();
