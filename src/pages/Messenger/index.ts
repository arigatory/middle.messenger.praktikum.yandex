import { ChatsList } from '../../components/ChatsList';
import { Messenger } from '../../components/Messenger';
import { Navigation } from '../../components/Navigation';
import ChatsController from '../../controllers/ChatsController';
import Block from '../../utils/Block';
import template from './messenger.pug';
import './messenger.scss';

export class MessengerPage extends Block {
  constructor() {
    super({});
  }

  protected init() {
    // this.children.chatsList = new ChatsList({isLoaded: false});
    this.children.navigation = new Navigation({});
    this.children.messenger = new Messenger({});
  }

  protected render(): DocumentFragment {
    return this.compile(template, {});
  }
}
