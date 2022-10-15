import Block from '../../utils/Block';
import { Button } from '../Button';
import { Input } from '../Input';
import { Message } from '../Message';
import MessagesController, {
  Message as MessageInfo,
} from '../../controllers/MessagesController';
import template from './messenger.pug';
import './messenger.scss';
import { withStore } from '../../utils/Store';

interface MessengerProps {
  selectedChat?: number;
  messages: MessageInfo[];
  userId: number;
} 

export class MessengerBase extends Block<MessengerProps> {
  constructor(props: MessengerProps) {
    super(props);
  }

  protected init(): void {
    this.children.messages = this.createMessages(this.props);

    this.children.input = new Input({
      label: 'Отправить',
      type: 'text',
      placeholder: 'сообщение',
      name: 'message',
    });

    this.children.button = new Button({
      label: 'Отправить',
      // type: 'button',
      events: {
        click: () => {
          if (!this.props.selectedChat) {
            return;
          }

          const input = this.children.input as Input;
          const message = input.getValue();

          input.setValue('');

          MessagesController.sendMessage(this.props.selectedChat, message);
        },
      },
    });
  }

  protected componentDidUpdate(
    _oldProps: MessengerProps,
    newProps: MessengerProps
  ): boolean {
    this.children.messages = this.createMessages(newProps);
    return true;
  }

  private createMessages(props: MessengerProps) {
    return props.messages.map((data) => {
      return new Message({...data, isMine: props.userId === data.user_id });
    });
  }

  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }
}

const withSelectedChatMessages = withStore((state) => {
  const selectedChatId = state.selectedChat;
  if (!selectedChatId) return {
    messages:  [],
    selectedChat: undefined,
  };


  return {
    messages: (state.messages || {})[selectedChatId] || [],
    selectedChat: state.selectedChat,
  };
});

export const Messenger = withSelectedChatMessages(MessengerBase);
