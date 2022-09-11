import { Chat, ChatProps } from './models/Chat';
import { MainView } from './views/MainView/MainView';
import { Main } from './models/Main';
import { Collection } from './models/Collection';

import { FakeDb } from './utils/fake-db';

const data = FakeDb.getChats();
const selectedChat: Chat = data[0];

const chats = new Collection('', (json: ChatProps) => Chat.buildChat(json));

chats.load(data);
const root = document.getElementById('root');
if (root) {
  new MainView(root, Main.buildMain({ chats, selectedChat })).render();
}