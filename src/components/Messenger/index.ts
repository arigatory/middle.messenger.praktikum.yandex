import Block from '../../utils/Block';
import { Button } from '../Button';
import { Input } from '../Input';
import { Message } from '../Message';
import { Message as MessageInfo } from '../../controllers/MessagesController';
import template from './messenger.pug';
import './messenger.scss';

interface MessengerProps {
  selectedChat: number | undefined;
  messages: MessageInfo[];
  userId: number;
}

const messages = [
  {
    content: 'Hello world !'
  },
  {
    content: 'ho ho ho !'
  },

];

export class Messenger extends Block<{}> {
  constructor() {
    super({});
  }

  protected init(): void {
    this.children.messages = messages.map(data => { 
      return new Message(data)
    });
    
    this.children.input = new Input({
      label: 'Отправить',
      type: 'text',
      placeholder: 'сообщение',
      name: 'message'
    });

    this.children.button = new Button({
      label: 'Отправить',
      // type: 'button',
      events: {
        click: () => {
          const input =this.children.input as Input;
          const message = input.getValue();

          // input.setValue('');

          console.log(message);
        }
      }
    });

  }




  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }
}

