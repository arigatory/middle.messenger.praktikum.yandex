import Block from '../../utils/Block';
import template from './success.pug';
import './success.scss';
import {Link} from '../../components/Link';

export class SuccessPage extends Block {
  init() {
    this.children.redirectLink = new Link({
      to: '/settings',
      label: 'В профиль',
    });
  }

  render() {
    console.log(this.props);
    return this.compile(template, { ...this.props });
  }
}