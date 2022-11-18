/* eslint-disable class-methods-use-this */
import { SignUpData } from '../../api/AuthAPI';
import { Button } from '../../components/Button';
import { FormInput } from '../../components/FormInput';
import { Link } from '../../components/Link';
import Block from '../../utils/Block';
import template from './registration.pug';
import AuthController from '../../controllers/AuthController';
import './registration.scss';
import {
  emailErrors,
  loginErrors,
  nameErrors,
  passwordErrors,
  phoneErrors,
} from '../../utils/validation';

export class RegistrationPage extends Block {
  init() {
    this.children.mail = new FormInput({
      name: 'email',
      type: 'email',
      label: 'Почта',
      validate: emailErrors,
      updateButton: () => this.updateButton(),
    });

    this.children.login = new FormInput({
      name: 'login',
      type: 'text',
      label: 'Логин',
      validate: loginErrors,
      updateButton: () => this.updateButton(),
    });

    this.children.firstName = new FormInput({
      name: 'first_name',
      type: 'text',
      label: 'Имя',
      validate: nameErrors,
      updateButton: () => this.updateButton(),
    });

    this.children.lastName = new FormInput({
      name: 'second_name',
      type: 'text',
      label: 'Фамилия',
      validate: nameErrors,
      updateButton: () => this.updateButton(),
    });

    this.children.phone = new FormInput({
      name: 'phone',
      type: 'text',
      label: 'Телефон',
      validate: phoneErrors,
      updateButton: () => this.updateButton(),
    });

    this.children.password = new FormInput({
      name: 'password',
      type: 'password',
      label: 'Пароль',
      validate: passwordErrors,
      updateButton: () => this.updateButton(),
    });

    this.children.passwordRepeat = new FormInput({
      name: 'passwordRepeat',
      type: 'password',
      label: 'Пароль (ещё раз)',
      validate: (s) => {
        const newErrors = passwordErrors(s);
        if ((this.children.password as FormInput).getValue() !== s) {
          newErrors.push('Пароли должны совпадать');
        }
        return newErrors;
      },
      updateButton: () => this.updateButton(),
    });

    this.children.button = new Button({
      label: 'Зарегистрироваться',
      events: {
        click: () => this.onSubmit(),
      },
      disabled: true,
    });

    this.children.link = new Link({
      to: '/login',
      label: 'Войти?',
    });
  }

  updateButton() {
    const res = Object.values(this.children)
      .filter((child) => child instanceof FormInput)
      .map((child) => (child as FormInput).countErrors())
      .reduce((partialSum, a) => partialSum + a, 0);
    if (this.children.button) {
      (this.children.button as Block).setProps({
        disabled: res > 0,
      });
    }
  }

  onSubmit() {
    const values = Object.values(this.children)
      .filter((child) => child instanceof FormInput)
      .map((child) => [
        (child as FormInput).getName(),
        (child as FormInput).getValue(),
      ]);

    const data = Object.fromEntries(values);

    AuthController.signup(data as SignUpData);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
