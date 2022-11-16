/* eslint-disable class-methods-use-this */
import Block from '../../utils/Block';
import template from './editAccount.pug';
import { withStore } from '../../utils/Store';
import './editAccount.scss';
import AuthController from '../../controllers/AuthController';
import { Button } from '../../components/Button';
import { Link } from '../../components/Link';
import { Input } from '../../components/Input';
import UsersController from '../../controllers/UsersController';

export class EditAccountPageBase extends Block {
  init() {
    AuthController.fetchUser();

    this.children.backLink = new Link({
      label: '<',
      to: '/messenger',
    });
    this.children.backLink.element?.classList.add('back-link');

    this.children.emailInput = new Input({
      label: 'Почта',
      name: 'email',
      type: 'text',
      value: this.props.email,
    });

    this.children.loginInput = new Input({
      label: 'Login',
      name: 'login',
      type: 'text',
      value: this.props.login,
    });

    this.children.firstNameInput = new Input({
      label: 'Имя',
      name: 'first_name',
      type: 'text',
      value: this.props.first_name,
    });

    this.children.secondNameInput = new Input({
      label: 'Фамилия',
      name: 'second_name',
      type: 'text',
      value: this.props.second_name,

    });

    this.children.displayNameInput = new Input({
      label: 'Имя в чате',
      name: 'display_name',
      type: 'text',
      value: this.props.display_name,
    });

    this.children.phoneInput = new Input({
      label: 'Телефон',
      name: 'phone',
      type: 'text',
      value: this.props.phone,
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

    UsersController.updateProfile(data);
  }
}
const withUser = withStore((state) => ({ ...state.user }));

export const EditAccountPage = withUser(EditAccountPageBase);
