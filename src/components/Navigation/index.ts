import ChatsController from '../../controllers/ChatsController';
import Block from '../../utils/Block';
import { ChatsList } from '../ChatsList';
import { Link } from '../Link';
import template from './navigation.pug';
import './navigation.scss';

export class Navigation extends Block {
  protected init(): void {
    this.children.profileLink = new Link({
      to: '/settings',
      label: 'Профиль >',
    });

    // this.children.searchBar = null;

    this.children.chatsList = new ChatsList({ isLoaded: false });

    ChatsController.fetchChats().finally(() => {
      (this.children.chatsList as Block).setProps({
        isLoaded: true,
      });
    });
  }

  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }
}
