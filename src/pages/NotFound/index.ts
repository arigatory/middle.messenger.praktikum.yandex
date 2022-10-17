import { Link } from '../../components/Link';
import Block from '../../utils/Block';
import template from './notFound.pug';
import './notFound.scss';

export class NotFoundPage extends Block {
  protected init(): void {
    this.children.messengerLink = new Link(
      {
        to: '/messenger',
        label: 'Назад к чатам'
      }
    )
  }
  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
