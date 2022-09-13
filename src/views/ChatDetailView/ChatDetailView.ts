import { View } from '../View';
import { Chat, ChatProps } from '../../models/Chat';
import template from './ChatDetailView.pug';
import { ChatHeaderView } from '../ChatHeaderView/ChatHeaderView';
import { MessageInputView } from '../MessageInputView/MessageInputView';
import './ChatDetailView.scss';
import { MessageInput } from '../../models/MessageInput';
import { MessagesListView } from '../MessagesListView/MessagesListView';
import { Message } from '../../models/Message';

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
      this.model.get('messages').models[0],
    ).render();

    const messageInput = MessageInput.buildMessageInput({ text: '' });
    messageInput.on('change', () => {
      this.model.get('messages').add(
        Message.buildMessage({
          time: new Date(),
          content: messageInput.get('text'),
          senderId: 1,
          isread: true,
        }),
      );
    });
    new MessageInputView(
      this.regions.messageInputRegion,
      messageInput,
    ).render();
  }

  template(): string {
    return template({});
  }
}
