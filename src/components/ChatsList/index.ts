import Block from '../../utils/Block';
import { Chat } from '../Chat';
import template from './chatsList.pug';
import './chatsList.scss';

const chats = [
  {
    id: 1,
    title: 'Chat 1',
    unread_count: 2,
  },
  {
    id: 1,
    title: 'Chat 2',
    unread_count: 0,
  },
  {
    id: 1,
    title: 'Chat 3',
    unread_count: 0,
  }
]



export class ChatList extends Block {
  protected init() {
    this.children.chats = chats.map(data => {
      return new Chat(data);
    });
  }
  

  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }

}
