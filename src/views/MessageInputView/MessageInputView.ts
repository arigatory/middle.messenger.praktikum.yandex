import { MessageInput, MessageInputProps } from '../../models/MessageInput';
import { View } from '../View';
import template from './MessageInputView.pug';
import './MessageInputView.scss';
import picUrl from './img/file.svg';

export class MessageInputView extends View<MessageInput, MessageInputProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.send-message': this.onSendMessage,
    };
  }

  onSendMessage = (): void => {
    const input = this.parent.querySelector('input');
    console.log(input?.value);
  };

  template(): string {
    const messageInput = this.model.get('text');
    return template({
      pic: picUrl,
      text: messageInput,
      placeholder: 'Сообщение',
    });
  }
}
