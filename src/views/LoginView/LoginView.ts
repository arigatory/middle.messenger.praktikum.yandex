/* eslint-disable class-methods-use-this */
import { View } from '../View';
import template from './LoginView.pug';
import './LoginView.scss';
import { Login, LoginProps } from '../../models/Login';
import { loginErrors, passwordErrors } from '../../utils/validation';

export class LoginView extends View<Login, LoginProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      'input:.login-card__login-input': this.onLoginInput,
      'input:.login-card__password-input': this.onPasswordInput,
      'submit:form': this.onSubmit,
    };
  }

  onSubmit = () => {
    console.log({
      login: this.model.get('login') ?? '',
      password: this.model.get('password') ?? '',
    });
    return false;
  };

  onLoginInput = (): void => {
    const input = <HTMLInputElement>(
      this.parent.querySelector('.login-card__login-input')
    );
    if (input) {
      this.model.silentUpdate('login', input?.value);
      this.model.silentUpdate('loginErrors', loginErrors(input?.value));
      const errors = this.parent.querySelector('.login-errors');
      if (errors) {
        const [errorText] = this.model.get('loginErrors');
        errors.textContent = errorText;
      }
    }
  };

  onPasswordInput = (): void => {
    const input = <HTMLInputElement>(
      this.parent.querySelector('.login-card__password-input')
    );
    if (input) {
      this.model.silentUpdate('password', input?.value);
      this.model.silentUpdate('passwordErrors', passwordErrors(input?.value));
      const errors = this.parent.querySelector('.password-errors');
      if (errors) {
        const [errorText] = this.model.get('passwordErrors');
        errors.textContent = errorText;
      }
    }
  };

  template(): string {
    return template({});
  }
}
