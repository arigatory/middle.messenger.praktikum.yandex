import store from '../utils/Store';
import WSTransport, { WSTransportEvents } from '../utils/WSTransport';

export interface Message {
  chat_id: number;
  time: string;
  type: string;
  user_id: number;
  content: string;
  file?: {
    id: number;
    user_id: number;
    path: string;
    filename: string;
    content_type: string;
    content_size: number;
    upload_date: string;
  };
}

class MessagesController {
  private sockets: Map<number, WSTransport> = new Map();

  async connect(chatId: number, token: string) {
    if (this.sockets.has(chatId)) {
      return;
    }

    const userId = store.getState().user.id;

    const wsTransport = new WSTransport(
      `wss://ya-praktikum.tech/ws/chats/${userId}/${chatId}/${token}`
    );

    this.sockets.set(chatId, wsTransport);

    await wsTransport.connect();

    this.subscribe(wsTransport, chatId);

    this.fetchOldMessages(chatId);
  }

  sendMessage(chatId: number, message: string) {
    const socket = this.sockets.get(chatId);

    if (!socket) {
      throw new Error(`Chat ${chatId} is not connected`);
    }

    socket.send({ type: 'message', content: message });
  }

  fetchOldMessages(chatId: number) {
    const socket = this.sockets.get(chatId);

    if (!socket) {
      throw new Error(`Chat ${chatId} is not connected`);
    }

    socket.send({ type: 'get old', content: '0' });
  }

  private onMessage(chatId: number, messages: Message | Message[]) {
    let messagesToAdd: Message[] = [];
    if (Array.isArray(messages)) {
      messagesToAdd = messages.reverse();
    } else {
      messagesToAdd.push(messages);
    }

    const currentMessages = (store.getState().messages || {})[chatId] || [];

    console.log(currentMessages);
    messagesToAdd = [...currentMessages, ...messagesToAdd];

    store.set(`messages.${chatId}`, messagesToAdd);
  }

  private onClose(chatId: number) {
    this.sockets.delete(chatId);
  }

  private subscribe(transport: WSTransport, chatId: number) {
    transport.on(WSTransportEvents.Message, (message) =>
      this.onMessage(chatId, message)
    );
    transport.on(WSTransportEvents.Close, () => this.onClose(chatId));
  }
}

const controller = new MessagesController();

// @ts-ignore
window.messagesController = controller;

export default controller;
