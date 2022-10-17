/* eslint-disable class-methods-use-this */
import Block from '../../utils/Block';
import template from './profile.pug';
import { withStore } from '../../utils/Store';
import './profile.scss';
import AuthController from '../../controllers/AuthController';
import { Link } from '../../components/Link';

export class ProfilePageBase extends Block {
  init() {
    AuthController.fetchUser();

    this.children.backLink = new Link({
      label: '<',
      to: '/messenger'
    });

    this.children.editAccountLink = new Link({
      label: 'Изменить пароль',
      to: '/passwordChange'
    });

    this.children.passwordChangeLink = new Link({
      label: 'Изменить данные',
      to: '/editAccount'
    });

    this.children.backLink.element?.classList.add('back-link');

    this.children.exitLink = new Link({
      label: 'Выйти',
      events: {
        click: () => {
          AuthController.logout();
        }
      },
      isDanger: true
    });

  }
  render() {
    return this.compile(template, this.props);
  }
}

const withUser = withStore((state) => ({...state.user}));

export const ProfilePage = withUser(ProfilePageBase);
