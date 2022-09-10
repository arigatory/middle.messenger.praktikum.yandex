import { View } from '../View';
import { Message, MessageProps } from '../../models/Message';
import template from './MessageView.pug';
import './MessageView.scss';

export class MessageView extends View<Message, MessageProps> {
  template(): string {
    const time = this.model.get('time');
    const timeString = time.getHours() + ':' + time.getMinutes();
    return template({ 
      text: this.model.get('content'), 
      time: timeString });
  }
}
