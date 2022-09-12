/* eslint-disable class-methods-use-this */
import { View } from '../View';
import template from './ProfileView.pug';
import './ProfileView.scss';
import { Profile, ProfileProps } from '../../models/Profile';

export class ProfileView extends View<Profile, ProfileProps> {
  template(): string {
    return template({picture: this.model.get('picture')});
  }
}
