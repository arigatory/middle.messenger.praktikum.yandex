import { MessageInput, MessageInputProps } from '../../models/MessageInput';
import { View } from '../View';
import template from './MessageInputView.pug';
import './MessageInputView.scss';
import picUrl from './img/file.svg';

export class MessageInputView extends View<MessageInput, MessageInputProps> {
  template(): string {
    let messageInput = this.model.get('text');
    return template({
      pic: picUrl,
      text: messageInput,
      placeholder: 'Сообщение',
    });
  }
}
