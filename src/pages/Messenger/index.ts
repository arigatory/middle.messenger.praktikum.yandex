import { ChatList as ChatsList } from '../../components/ChatsList';
import Block from '../../utils/Block';
import template from './messenger.pug';
import './messenger.scss';

export class MessengerPage extends Block {
  constructor() {
    super({});
  }

  protected init() {
    // ChatController.fetchData();

    this.children.chatsList = new ChatsList({});
  }

  protected render(): DocumentFragment {
    return this.compile(template, {});
  }
}
