/* eslint-disable class-methods-use-this */
import Block from '../../utils/Block';
import template from './passwordChange.pug';
import { withStore } from '../../utils/Store';
import './passwordChange.scss';
import AuthController from '../../controllers/AuthController';
import { Button } from '../../components/Button';
import { Link } from '../../components/Link';
import { Input } from '../../components/Input';
import UsersController from '../../controllers/UsersController';

export class PasswordChangePageBase extends Block {
  init() {
    AuthController.fetchUser();

    this.children.backLink = new Link({
      label: '<',
      to: '/messenger',
    });
    this.children.backLink.element?.classList.add('back-link');

    this.children.oldPasswordInput = new Input({
      label: 'Старый пароль',
      name: 'oldPassword',
      type: 'password',
    });

    this.children.newPasswordInput = new Input({
      label: 'Новый пароль',
      name: 'newPassword',
      type: 'password',
    });

    this.children.newPasswordRepeatInput = new Input({
      label: 'Повторите новый пароль',
      name: 'newPasswordRepeat',
      type: 'password',
    });

    this.children.saveButton = new Button({
      label: 'Сохранить',
      events: {
        click: () => {
          this.onSubmit();
        },
      },
    });
  }
  render() {
    return this.compile(template, this.props);
  }

  onSubmit() {
    const values = Object.values(this.children)
      .filter((child) => child instanceof Input)
      .map((child) => [
        (child as Input).getName(),
        (child as Input).getValue(),
      ]);

    const data = Object.fromEntries(values);

    UsersController.changePassword(data);
  }
}
const withUser = withStore((state) => ({ ...state.user }));

export const PasswordChangePage = withUser(PasswordChangePageBase);
