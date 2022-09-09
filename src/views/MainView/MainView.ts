import { View } from '../View';
import { Chat, ChatProps } from '../../models/Chat';
import template from './MainView.pug';
import { NavigationView } from '../NavigationView/NavigationView';
import './MainView.scss';
import { ChatDetailView } from '../ChatDetailView/ChatDetailView';
import { ChatPreview } from '../../models/ChatPreview';
import { Main, MainProps } from '../../models/Main';
import { Navigation } from '../../models/Navigation';
import { Collection } from '../../models/Collection';

export class MainView extends View<Main, MainProps> {
  regionsMap(): { [key: string]: string } {
    return {
      navigationRegion: '.navigation-region',
      chatDetailRegion: '.chat-detail-region',
    };
  }

  onRender(): void {
    const chats = this.model.get('chats');
    
    new ChatDetailView(this.regions.chatDetailRegion, chats[0]).render();
  }

  template(): string {
    return template({});
  }
}
