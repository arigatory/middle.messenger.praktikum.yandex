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



export class AuthAPI extends BaseAPI {
  constructor() {
    super('/auth');
  }

  signin(data: SignInData) {
    return this.http.post('/signin', data);
  }

  signup(data: SignUpData) {
    return this.http.post('/signup', data);
  }

  read(): Promise<User> {
    return this.http.get('/user');
  }

  logout() {
    return this.http.post('/logout');
  }

  create = undefined;
  update = undefined;
  delete = undefined;
}

export default new AuthAPI();