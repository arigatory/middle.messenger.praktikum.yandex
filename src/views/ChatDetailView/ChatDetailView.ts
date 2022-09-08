import { View } from '../View';
import { Chat, ChatProps } from '../../models/Chat';
import template from './ChatDetailView.pug';
import { ChatHeaderView } from '../ChatHeaderView/ChatHeaderView';
import { MessageView } from '../MessageView/MessageView';
import { MessageInputView } from '../MessageInputView/MessageInputView';
import './ChatDetailView.scss';



export class ChatDetailView extends View<Chat, ChatProps> {
  regionsMap(): { [key: string]: string; } {
    return {
      chatHeaderRegion: '.chat-header-region',
      messagesListRegion: '.messages-list-region',
      messageInputRegion: '.message-input-region',
    };
  }

  onRender(): void {
    new ChatHeaderView(this.regions.chatHeaderRegion, this.model).render();
    new MessageView(this.regions.messagesListRegion, this.model).render();
    new MessageInputView(this.regions.messageInputRegion, this.model).render();
  }

  template(): string {
    return template({});
  }
}