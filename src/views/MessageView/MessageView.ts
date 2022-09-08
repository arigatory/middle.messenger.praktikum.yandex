import { View } from '../View';
import { Message, MessageProps } from '../../models/Message';
import template from './MessageView.pug';
import './MessageView.scss';



export class MessageView extends View<Message, MessageProps> {
  template(): string {
    return template({});
  }
}