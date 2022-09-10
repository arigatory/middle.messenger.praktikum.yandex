/* eslint-disable class-methods-use-this */
import { View } from '../View';
import { Chat } from '../../models/Chat';
import template from './MainView.pug';
import { NavigationView } from '../NavigationView/NavigationView';
import './MainView.scss';
import { ChatDetailView } from '../ChatDetailView/ChatDetailView';
import { Main, MainProps } from '../../models/Main';
import { Navigation } from '../../models/Navigation';

export class MainView extends View<Main, MainProps> {
  regionsMap = (): { [key: string]: string } => ({
    navigationRegion: '.navigation-region',
    chatDetailRegion: '.chat-detail-region',
  });

  setSelectedChat = (selectedChat: Chat) => {
    this.model.update('selectedChat', selectedChat);
  };

  // onSelectedChatChanged(chat: Chat): void {
  //   this.model.setSe
  // }

  onRender(): void {
    new NavigationView(
      this.regions.navigationRegion,

      Navigation.buildNavigation({
        chats: this.model.get('chats'),
        searchQuery: '',
        selectedChat: this.model.get('selectedChat'),
      }),
      this.setSelectedChat,
    ).render();
    const selectedChat = this.model.get('selectedChat');
    if (selectedChat) {
      new ChatDetailView(this.regions.chatDetailRegion, selectedChat).render();
    }
  }

  template(): string {
    return template({});
  }
}
