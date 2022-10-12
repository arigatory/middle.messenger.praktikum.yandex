/* eslint-disable class-methods-use-this */
import Block from '../../utils/Block';
import template from './profile.pug';
import { withStore } from '../../utils/Store';
import './profile.scss';

export class ProfilePageBase extends Block {
  render() {
    return this.compile(template, this.props);
  }
}

const withUser = withStore((state) => ({...state.user}));

export const ProfilePage = withUser(ProfilePageBase);
