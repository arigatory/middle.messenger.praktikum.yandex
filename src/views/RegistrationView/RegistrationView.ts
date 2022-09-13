/* eslint-disable class-methods-use-this */
import { View } from '../View';
import template from './RegistrationView.pug';
import './RegistrationView.scss';
import { Registration, RegistrationProps } from '../../models/Registration';
import {
  emailErrors,
  loginErrors,
  passwordErrors,
  nameErrors,
  phoneErrors,
} from '../../utils/validation';

export class RegistrationView extends View<Registration, RegistrationProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      'input:.registration-card__email-input': this.onEmailInput,
      'input:.registration-card__login-input': this.onLoginInput,
      'input:.registration-card__firstname-input': this.onFirstNameInput,
      'input:.registration-card__lastname-input': this.onLastNameInput,
      'input:.registration-card__phone-input': this.onPhoneInput,
      'input:.registration-card__password-input': this.onPasswordInput,
      'input:.registration-card__password-repeat-input':
        this.onPasswordRepeatInput,
      'submit:form': this.onSubmit,
    };
  }

  onEmailInput = (): void => {
    const input = <HTMLInputElement>(
      this.parent.querySelector('.registration-card__email-input')
    );
    if (input) {
      this.model.silentUpdate('email', input?.value);
      this.model.silentUpdate('emailErrors', emailErrors(input?.value));
      const errors = this.parent.querySelector('.email-errors');
      if (errors) {
        const [errorText] = this.model.get('emailErrors');
        errors.textContent = errorText;
      }
    }
  };

  onLoginInput = (): void => {
    const input = <HTMLInputElement>(
      this.parent.querySelector('.registration-card__login-input')
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

  onFirstNameInput = (): void => {
    const input = <HTMLInputElement>(
      this.parent.querySelector('.registration-card__firstname-input')
    );
    if (input) {
      this.model.silentUpdate('firstname', input?.value);
      this.model.silentUpdate('firstnameErrors', nameErrors(input?.value));
      const errors = this.parent.querySelector('.firstname-errors');
      if (errors) {
        const [errorText] = this.model.get('firstnameErrors');
        errors.textContent = errorText;
      }
    }
  };

  onLastNameInput = (): void => {
    const input = <HTMLInputElement>(
      this.parent.querySelector('.registration-card__lastname-input')
    );
    if (input) {
      this.model.silentUpdate('lastname', input?.value);
      this.model.silentUpdate('lastnameErrors', nameErrors(input?.value));
      const errors = this.parent.querySelector('.lastname-errors');
      if (errors) {
        const [errorText] = this.model.get('lastnameErrors');
        errors.textContent = errorText;
      }
    }
  };

  onPhoneInput = (): void => {
    const input = <HTMLInputElement>(
      this.parent.querySelector('.registration-card__phone-input')
    );
    if (input) {
      this.model.silentUpdate('phone', input?.value);
      this.model.silentUpdate('phoneErrors', phoneErrors(input?.value));
      const errors = this.parent.querySelector('.phone-errors');
      if (errors) {
        const [errorText] = this.model.get('phoneErrors');
        errors.textContent = errorText;
      }
    }
  };

  onPasswordInput = (): void => {
    const input = <HTMLInputElement>(
      this.parent.querySelector('.registration-card__password-input')
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

  onPasswordRepeatInput = (): void => {
    const input = <HTMLInputElement>(
      this.parent.querySelector('.registration-card__password-repeat-input')
    );
    if (input) {
      this.model.silentUpdate('passwordRepeat', input?.value);
      const newErrors = passwordErrors(input?.value);
      if (this.model.get('password') !== this.model.get('passwordRepeat')) {
        newErrors.push('Пароли должны совпадать');
      }
      this.model.silentUpdate('passwordRepeatErrors', newErrors);
      const errors = this.parent.querySelector('.password-repeat-errors');
      if (errors) {
        const [errorText] = this.model.get('passwordRepeatErrors');
        errors.textContent = errorText;
      }
    }
  };

  onSubmit = () => {
    console.log({
      registration: this.model.get('email') ?? '',
      login: this.model.get('login') ?? '',
      firstName: this.model.get('firstname') ?? '',
      lastName: this.model.get('lastname') ?? '',
      phone: this.model.get('phone') ?? '',
      password: this.model.get('password') ?? '',
    });
    return false;
  };

  template(): string {
    return template({});
  }
}
