import API, { ChangePasswordsData, User, UsersAPI } from '../api/UsersAPI';
import router from '../utils/Router';

export class UsersController {
  private readonly _api: UsersAPI;

  constructor() {
    this._api = API;
  }

  public async changePassword(data: ChangePasswordsData) {
    try {
      await this._api.changePassword(data);

      router.go('/success');
    } catch (err) {
      router.go('/error');
    }
  }

  public async updateProfile(data: User) {
    try {
      await this._api.updateProfile(data);

      router.go('/success');
    } catch (err) {
      router.go('/error');
    }
  }
}

export default new UsersController();
