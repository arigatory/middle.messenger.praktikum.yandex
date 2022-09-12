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
      'input:.registration-card__password-repeat-input': this.onPasswordRepeatInput,
      'submit:form': this.onSubmit,
    };
  }

  onEmailInput = (): void => {
    const input = <HTMLInputElement>(
      this.parent.querySelector('.registration-card__email-input')
    );
    if (input) {
      this.model.silentUpdate('email', input?.value);
      this.model.silentUpdate(
        'emailErrors',
        emailErrors(input?.value)
      );
      const errors = this.parent.querySelector('.email-errors');
      if (errors) {
        errors.textContent = this.model.get('emailErrors')[0];
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
        errors.textContent = this.model.get('loginErrors')[0];
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
        errors.textContent = this.model.get('firstnameErrors')[0];
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
        errors.textContent = this.model.get('lastnameErrors')[0];
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
        errors.textContent = this.model.get('phoneErrors')[0];
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
        errors.textContent = this.model.get('passwordErrors')[0];
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
        errors.textContent = this.model.get('passwordRepeatErrors')[0];
      }
    }
  };


  onSubmit = () => {
    console.log({
      registration: this.model.get('email') ?? '',
      password: this.model.get('password') ?? '',
    });
    return false;
  };



  template(): string {
    return template({});
  }
}
