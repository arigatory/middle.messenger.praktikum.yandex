/* eslint-disable class-methods-use-this */
import { SignInData } from '../../api/AuthAPI';
import { Button } from '../../components/Button';
import { FormInput } from '../../components/FormInput';
import { Link } from '../../components/Link';
import AuthController from '../../controllers/AuthController';
import Block from '../../utils/Block';
import { loginErrors } from '../../utils/validation';
import template from './login.pug';
import './login.scss';

export class LoginPage extends Block {
  init() {
    this.children.login = new FormInput({
      name: 'login',
      type: 'text',
      label: 'Логин',
      validate: loginErrors,
      updateButton: () => this.updateButton(),
    });

    this.children.password = new FormInput({
      name: 'password',
      type: 'password',
      label: 'Пароль',
      validate: () => [],
    });

    this.children.button = new Button({
      label: 'Войти',
      events: {
        click: () => this.onSubmit(),
      },
      disabled: true,
    });

    this.children.link = new Link({
      to: '/sign-up',
      label: 'Регистрация',
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
    if ((this.children.button as Button).isDisabled()) {
      return;
    }
    const values = Object.values(this.children)
      .filter((child) => child instanceof FormInput)
      .map((child) => [
        (child as FormInput).getName(),
        (child as FormInput).getValue(),
      ]);

    const data = Object.fromEntries(values);

    AuthController.signin(data as SignInData);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
