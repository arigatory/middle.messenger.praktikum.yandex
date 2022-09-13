import { MessageInput, MessageInputProps } from '../../models/MessageInput';
import { View } from '../View';
import template from './MessageInputView.pug';
import './MessageInputView.scss';
import picUrl from './img/file.svg';

export class MessageInputView extends View<MessageInput, MessageInputProps> {
  eventsMap(): { [key: string]: (e: any) => void } {
    return {
      'click:.send-message': this.onSendMessage,
      'keypress:input': this.onKeyPressedMessage,
    };
  }

  onKeyPressedMessage = (e: { key: string }): void => {
    if (e.key === 'Enter') {
      this.onSendMessage();
    }
  };

  onSendMessage = (): void => {
    const input = this.parent.querySelector('input');
    if (input?.value) {
      console.log(input?.value);
      this.model.update('text', input?.value);
    }
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
