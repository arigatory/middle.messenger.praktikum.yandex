import Block from '../../utils/Block';
import template from './registration.pug';
import './registration.scss';

export class RegistrationPage extends Block {

  render() {
    return this.compile(template, {...this.props});
  }
}
