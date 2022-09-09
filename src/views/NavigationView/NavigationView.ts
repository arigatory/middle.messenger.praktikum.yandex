import { Navigation, NavigationProps } from '../../models/Navigation';
import { ChatListView } from '../ChatListView/ChatListView';
import { View } from '../View';
import template from './NavigationView.pug';
import './NavigationView.scss';

export class NavigationView extends View<Navigation, NavigationProps> {
  regionsMap(): { [key: string]: string } {
    return {
      chatListRegion: '.chat-list-region',
    };
  }

  onRender(): void {
    new ChatListView(
      this.regions.chatListRegion,
      this.model.get('chats')
    ).render();
  }

  template(): string {
    return template({});
  }
}
