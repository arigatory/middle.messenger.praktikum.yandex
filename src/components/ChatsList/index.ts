import { ChatInfo } from '../../api/ChatsAPI';
import ChatsController from '../../controllers/ChatsController';
import Block from '../../utils/Block';
import { withStore } from '../../utils/Store';
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
  },
];

interface ChatsListProps {
  chats: ChatInfo[];
  isLoaded: boolean;
}

class ChatsListBase extends Block<ChatsListProps> {
  constructor(props: ChatsListProps) {
    super({ ...props });
  }

  protected init() {
    this.children.chats = this.createChats(this.props);
  }

  protected componentDidUpdate(
    oldProps: ChatsListProps,
    newProps: ChatsListProps
  ): boolean {
    this.children.chats = this.createChats(newProps);
    return super.componentDidUpdate(oldProps, newProps);
  }
 
  private createChats(props: ChatsListProps) {
    return props.chats.map(data => {
      return new Chat({
        ...data,
        events: {
          click: () => {
            ChatsController.selectChat(data.id)
          }
        }
      });
    });
  }

  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }
}

const withChats = withStore((state) => ({ chats: [...(state.chats || [])] }));

export const ChatsList = withChats(ChatsListBase);
