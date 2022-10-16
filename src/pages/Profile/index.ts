/* eslint-disable class-methods-use-this */
import Block from '../../utils/Block';
import template from './profile.pug';
import { withStore } from '../../utils/Store';
import './profile.scss';
import AuthController from '../../controllers/AuthController';
import { Button } from '../../components/Button';
import { Link } from '../../components/Link';
import { Console } from 'console';

export class ProfilePageBase extends Block {
  init() {
    AuthController.fetchUser();

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
