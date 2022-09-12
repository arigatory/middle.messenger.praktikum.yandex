import { Model } from './Model';
import { Attributes } from './Attributes';
import { Eventing } from './Eventing';

export interface LoginProps {
  id?: number;
  login?: string;
  loginErrors: string[];
  passwordErrors: string[];
  password?: string;
}

export class Login extends Model<LoginProps> {
  static buildLogin(): Login {
    return new Login(new Attributes<LoginProps>({
      loginErrors: [],
      passwordErrors: [],
    }), new Eventing());
  }
}
