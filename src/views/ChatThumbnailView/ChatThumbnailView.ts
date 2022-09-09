import { View } from '../View';
import { Message, MessageProps } from '../../models/Message';
import template from './ChatThumbnailView.pug';
import './ChatThumbnailView.scss';
import { Chat, ChatProps } from '../../models/Chat';
import { random } from 'faker';



export class ChatThumbnailView extends View<Chat, ChatProps> {
  template(): string {
    console.log(this.model);
    const time = (this.model.get('messages')[0]).get('time');
    const timeString = time.getHours() + ':' + time.getMinutes();
    const chat = {
      pic: this.model.get('with')?.get('picture'),
      name: this.model.get('with')?.get('nameInChat'),
      text: (this.model.get('messages')[0]).get('content') ?? '',
      time: timeString,
      newMessageCount: 1
    };
    return template(chat);
  }
}
