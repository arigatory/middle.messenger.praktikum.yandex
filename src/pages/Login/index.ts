/* eslint-disable class-methods-use-this */
import { SignInData } from '../../api/AuthAPI';
import { Button } from '../../components/Button';
import { FormInput } from '../../components/FormInput';
import { Link } from '../../components/Link';
import AuthController from '../../controllers/AuthController';
import Block from '../../utils/Block';
import template from './login.pug';
import './login.scss';

export class LoginPage extends Block {
  init() {
    this.children.login = new FormInput({
      name: 'login',
      type: 'text',
      label: 'Логин',
    });

    this.children.password = new FormInput({
      name: 'password',
      type: 'password',
      label: 'Пароль',
    });

    this.children.button = new Button({
      label: 'Войти',
      events: {
        click: () => this.onSubmit(),
      },
    });

    this.children.link = new Link({
      to: '/registration',
      label: 'Регистрация',
    });
  }


  onSubmit() {
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