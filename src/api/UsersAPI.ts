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

export class UsersAPI extends BaseAPI {
  constructor() {
    super('/user');
  }

  readById(userId: number): Promise<User> {
    return this.http.get(`/${userId}`);
  }

  changePassword(data: ChangePasswordsData) {
    return this.http.put('/password', data);
  }

  updateProfile(data: User) {
    return this.http.put('/profile', data);
  }

  read = undefined;

  create = undefined;

  update = undefined;

  delete = undefined;
}

export default new UsersAPI();
