import { Chat } from '../../models/Chat';
import { Navigation, NavigationProps } from '../../models/Navigation';
import { ChatListView } from '../ChatListView/ChatListView';
import { View } from '../View';
import template from './NavigationView.pug';
import './NavigationView.scss';

export class NavigationView extends View<Navigation, NavigationProps> {
  constructor(
    public parent: Element,
    public model: Navigation,
    public setSelectedChat: (selectedChat: Chat) => void
  ) {
    super(parent, model);
  }
  regionsMap(): { [key: string]: string } {
    return {
      chatListRegion: '.chat-list-region',
    };
  }

  onRender(): void {
    new ChatListView(
      this.regions.chatListRegion,
      this.model.get('chats'),
      this.model.get('selectedChat'),
      this.setSelectedChat
    ).render();
  }

  template(): string {
    return template({});
  }
}
