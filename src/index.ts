import { Chat } from './models/Chat';
import { MainView } from './views/MainView/MainView';
import { Main } from './models/Main';

import { ChatListView } from './views/ChatListView/ChatListView';
import { Collection } from './models/Collection';
import { ChatProps } from './models/Chat';

const chats = new Collection('', (json: ChatProps) => {
  return Chat.buildChat(json);
});


chats.on('change', () => {
  const root = document.getElementById('root');
  if (root) {
    console.log('chats changed');
    new ChatListView(root, chats).render();
  }
});


const chat1 = Chat.buildChat({
    id:1,
    fromId: 2,
    messages: [],
    picture: "not exist",
    title: "Funny chat",
}); 

const chat2 = Chat.buildChat({
  id:1,
  fromId: 2,
  messages: [],
  picture: "not exist",
  title: "Funny chat",
}); 


chats.load([chat1, chat2]);
