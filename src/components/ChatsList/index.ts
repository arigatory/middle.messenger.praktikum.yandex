import { ChatInfo } from '../../api/ChatsAPI';
import ChatsController from '../../controllers/ChatsController';
import Block from '../../utils/Block';
import { withStore } from '../../utils/Store';
import { Chat } from '../Chat';
import template from './chatsList.pug';
import './chatsList.scss';


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
    _oldProps: ChatsListProps,
    newProps: ChatsListProps
  ): boolean {
    this.children.chats = this.createChats(newProps);
    return true;
  }

  private createChats(props: ChatsListProps) {
    return props.chats.map((data) => {
      return new Chat({
        ...data,
        events: {
          click: () => {
            ChatsController.selectChat(data.id);
          },
        },
      });
    });
  }

  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }
}

const withChats = withStore((state) => ({ chats: [...(state.chats || [])] }));

export const ChatsList = withChats(ChatsListBase);
