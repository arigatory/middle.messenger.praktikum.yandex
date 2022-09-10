import { Chat, ChatProps } from '../../models/Chat';
import { Model } from '../../models/Model';
import { View } from '../View';
import template from './ChatHeaderView.pug';
import './ChatHeaderView.scss';

export class ChatHeaderView extends View<Chat, ChatProps> {
  template(): string {
    return template({
      pic: this.model.get('with')?.get('picture'),
      name: this.model.get('with')?.get('nameInChat'),
    });
  }
}
