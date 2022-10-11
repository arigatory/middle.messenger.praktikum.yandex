/* eslint-disable class-methods-use-this */
import { Button } from '../../components/Button';
import { FormInput } from '../../components/FormInput';
import { Link } from '../../components/Link';
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
        click: () => console.log('button clicked'),
      },
    });

    this.children.link = new Link({
      to: '/register',
      label: 'Регистрация',
    });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
