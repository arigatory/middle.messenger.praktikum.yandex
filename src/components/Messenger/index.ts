import Block from '../../utils/Block';
import { Button } from '../Button';
import { Input } from '../Input';
import { Message } from '../Message';
import MessagesController, {
  Message as MessageInfo,
} from '../../controllers/MessagesController';
import template from './messenger.pug';
import './messenger.scss';
import { withSelectedChat } from '../Chat';
import { ChatInfo } from '../../api/ChatsAPI';

interface MessengerProps {
  selectedChat: ChatInfo;
}

const messages = [
  // {
  //   content: 'Hello world !',
  // },
  // {
  //   content: 'ho ho ho !',
  // },
];

export class MessengerBase extends Block<MessengerProps> {

  protected init(): void {
    this.children.messages = messages.map((data) => {
      return new Message(data);
    });

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
          
          MessagesController.sendMessage(this.props.selectedChat!.id, message);
          console.log(message);
        },
      },
    });
  }

  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }
}

export const Messenger = withSelectedChat(MessengerBase);
