import { View } from '../View';
import { Chat, ChatProps } from '../../models/Chat';
import template from './ChatDetailView.pug';
import { ChatHeaderView } from '../ChatHeaderView/ChatHeaderView';
import { MessageView } from '../MessageView/MessageView';
import { MessageInputView } from '../MessageInputView/MessageInputView';
import { NavigationView } from '../NavigationView/NavigationView';
import './ChatDetailView.scss';
import { MessageInput } from '../../models/MessageInput';
import { MessagesListView } from '../MessagesListView/MessagesListView';

export class ChatDetailView extends View<Chat, ChatProps> {
  regionsMap(): { [key: string]: string } {
    return {
      navigationRegion: '.navigation-region',
      chatHeaderRegion: '.chat-header-region',
      messagesListRegion: '.messages-list-region',
      messageInputRegion: '.message-input-region',
    };
  }

  onRender(): void {
    new ChatHeaderView(this.regions.chatHeaderRegion, this.model).render();
    new MessagesListView(
      this.regions.messagesListRegion,
      this.model.get('messages'),
      this.model.get('messages').models[0]
    ).render();
    new MessageInputView(
      this.regions.messageInputRegion,
      MessageInput.buildMessageInput({ text: '' })
    ).render();
  }

  template(): string {
    return template({});
  }
}
