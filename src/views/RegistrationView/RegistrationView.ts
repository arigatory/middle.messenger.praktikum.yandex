/* eslint-disable class-methods-use-this */
import { View } from '../View';
import template from './RegistrationView.pug';
import './RegistrationView.scss';
import { Registration, RegistrationProps } from '../../models/Registration';

export class RegistrationView extends View<Registration, RegistrationProps> {
  template(): string {
    return template({});
  }
}
