import { View } from '../View';
import { Message, MessageProps } from '../../models/Message';
import template from './ChatThumbnailView.pug';
import './ChatThumbnailView.scss';
import { Chat, ChatProps } from '../../models/Chat';
import { random } from 'faker';

function pad(num: number, size): string {
  let res = num.toString();
  while (res.length < size) res = '0' + num;
  return res;
}

function int(max: number): number {
  return Math.floor(Math.random() * max);
}

function randomHour(): string {
  return pad(int(24), 2);
}

export class ChatThumbnailView extends View<Chat, ChatProps> {
  template(): string {
    const chat = {
      pic: `https://i.pravatar.cc/${Math.floor(Math.random() * 100) + 50}`,
      name: `Коллега ${int(100)}`,
      text: 'Сообщение',
      time: `${randomHour()}:${randomHour()}`,
      newMessageCount: int(3)
    };
    return template(chat);
  }
}
