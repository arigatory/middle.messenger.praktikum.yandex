import { View } from '../View';
import template from './ChatThumbnailView.pug';
import './ChatThumbnailView.scss';
import { Chat, ChatProps } from '../../models/Chat';

export class ChatThumbnailView extends View<Chat, ChatProps> {
  constructor(
    public parent: Element,
    public model: Chat,
    public selectedChat: Chat,
    public setSelectedChat: (selectedChat: Chat) => void,
  ) {
    super(parent, model);
  }

  eventsMap(): { [key: string]: () => void } {
    return { 'click:.chat-item': this.onSelect };
  }

  onSelect = (): void => {
    this.setSelectedChat(this.model);
  };

  template(): string {
    const chat = {
      pic: this.model.get('with')?.get('picture'),
      name: this.model.get('with')?.get('nameInChat'),
      text: '',
      time: '',
      newMessageCount: 0,
      isSelected: this.model === this.selectedChat,
    };
    const messages = this.model.get('messages');
    if (messages.models.length > 0) {
      const time = this.model.get('messages').models[0].get('time');
      const timeString = `${time.getHours()}:${time.getMinutes()}`;
      chat.time = timeString;
      chat.text = this.model.get('messages').models[0].get('content') ?? '';
      chat.newMessageCount = messages.models.length;
    }
    return template(chat);
  }
}
