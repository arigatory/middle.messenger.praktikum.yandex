import { Model } from './Model';
import { Attributes } from './Attributes';
import { Eventing } from './Eventing';

export interface RegistrationProps {
  id?: number;
  email?: string;
  emailErrors: string[];
  login?: string;
  loginErrors: string[];
  firstname?: string;
  firstnameErrors: string[];
  lastname?: string;
  lastnameErrors: string[];
  phone?: string;
  phoneErrors: string[];
  password?: string;
  passwordErrors: string[];
  passwordRepeat?: string;
  passwordRepeatErrors: string[];
}

export class Registration extends Model<RegistrationProps> {
  static buildRegistration(): Registration {
    return new Registration(
      new Attributes<RegistrationProps>({
        emailErrors: [],
        loginErrors: [],
        firstnameErrors: [],
        lastnameErrors: [],
        phoneErrors: [],
        passwordErrors: [],
        passwordRepeatErrors: [],
      }),
      new Eventing(),
    );
  }
}
