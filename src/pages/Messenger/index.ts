import { ChatsList as ChatsList } from '../../components/ChatsList';
import { Messenger } from '../../components/Messenger';
import ChatsController from '../../controllers/ChatsController';
import Block from '../../utils/Block';
import template from './messenger.pug';
import './messenger.scss';

export class MessengerPage extends Block {
  constructor() {
    super({});
  }

  protected init() {
    this.children.chatsList = new ChatsList({isLoaded: false});
    this.children.messenger = new Messenger();

    ChatsController.fetchChats().finally(() => {
      (this.children.chatsList as Block).setProps({
        isLoaded: true,
      });
    });
  }

  protected render(): DocumentFragment {
    return this.compile(template, {});
  }
}
