import { ChatInfo } from '../../api/ChatsAPI';
import Block from '../../utils/Block';
import { withStore } from '../../utils/Store';
import template from './chat.pug';
import './chat.scss';
import pic from '../../img/empty-avatar.png';

interface ChatProps {
  id: number;
  title: string;
  unread_count: number;
  selectedChat: ChatInfo;
  last_message: {
    content: string;
    time: string;
    user: {
      avatar: string;
      display_name: string;
      email: string;
      first_name: string;
      login: string;
      phone: string;
      second_name: string;
    };
  };
  pic: string;
  events: {
    click: () => void;
  };
}

class ChatBase extends Block<ChatProps> {
  constructor(props: ChatProps) {
    super(props);
  }

  protected render(): DocumentFragment {
    return this.compile(template, {
      ...this.props,
      time: this.props.last_message.time.split(/[T+]/)[1],
      isSelected: this.props.id === this.props.selectedChat?.id,
      pic: this.props.last_message.user.avatar
        ? this.props.last_message.user.avatar
        : pic,
      text: this.props.last_message.content,
    });
  }
}

export const withSelectedChat = withStore((state) => ({
  selectedChat: (state.chats || []).find(({ id }) => id === state.selectedChat),
}));

export const Chat = withSelectedChat(ChatBase);
