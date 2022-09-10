import { Chat } from './models/Chat';
import { MainView } from './views/MainView/MainView';
import { Main } from './models/Main';
import { Collection } from './models/Collection';
import { ChatProps } from './models/Chat';
import { FakeDb } from './utils/fake-db';

const data = FakeDb.getChats();
let selectedChat: Chat = data[0];

const chats = new Collection('', (json: ChatProps) => {
  return Chat.buildChat(json);
});

chats.on('change', () => {
  const root = document.getElementById('root');
  if (root) {
    new MainView(
      root,
      Main.buildMain({ chats: chats, selectedChat: selectedChat })
    ).render();
  }
});

chats.load(data);
