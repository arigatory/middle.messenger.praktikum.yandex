import { View } from '../View';
import template from './ChatThumbnailView.pug';
import './ChatThumbnailView.scss';
import { Chat, ChatProps } from '../../models/Chat';

export class ChatThumbnailView extends View<Chat, ChatProps> {
  constructor(
    public parent: Element,
    public model: Chat,
    public selectedChat: Chat,
    public setSelectedChat: (selectedChat: Chat) => void
  ) {
    super(parent, model);
  }
  eventsMap(): { [key: string]: () => void } {
    return { 'click:.chat-item': this.onSelect };
  }

  onSelect = (): void => {
    console.log(this.model === this.selectedChat);
    console.log(this.model);
    this.setSelectedChat(this.model);
    this.selectedChat = this.model;
    console.log(this.model === this.selectedChat);
  };

  template(): string {
    const time = this.model.get('messages').models[0].get('time');
    const timeString = time.getHours() + ':' + time.getMinutes();
    const chat = {
      pic: this.model.get('with')?.get('picture'),
      name: this.model.get('with')?.get('nameInChat'),
      text: this.model.get('messages').models[0].get('content') ?? '',
      time: timeString,
      newMessageCount: 1,
      isSelected: this.model === this.selectedChat,
    };
    return template(chat);
  }
}
