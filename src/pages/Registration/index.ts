/* eslint-disable class-methods-use-this */
import { Button } from '../../components/Button';
import { FormInput } from '../../components/FormInput';
import { Link } from '../../components/Link';
import Block from '../../utils/Block';
import template from './registration.pug';
import './registration.scss';

export class RegistrationPage extends Block {
  init() {
    this.children.mail = new FormInput({
      name: 'mail',
      type: 'email',
      label: 'Почта',
    });

    this.children.login = new FormInput({
      name: 'login',
      type: 'text',
      label: 'Логин',
    });

    this.children.firstName = new FormInput({
      name: 'firstName',
      type: 'text',
      label: 'Имя',
    });

    this.children.lastName = new FormInput({
      name: 'lastName',
      type: 'text',
      label: 'Фамилия',
    });

    this.children.phone = new FormInput({
      name: 'phone',
      type: 'text',
      label: 'Телефон',
    });

    this.children.password = new FormInput({
      name: 'password',
      type: 'password',
      label: 'Пароль',
    });

    this.children.passwordRepeat = new FormInput({
      name: 'passwordRepeat',
      type: 'password',
      label: 'Пароль (ещё раз)',
    });

    this.children.button = new Button({
      label: 'Зарегистрироваться',
      events: {
        click: () => console.log('button clicked'),
      },
    });

    this.children.link = new Link({
      to: '/login',
      label: 'Войти?'
    });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
