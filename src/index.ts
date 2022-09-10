import { Chat } from './models/Chat';
import { MainView } from './views/MainView/MainView';
import { Main } from './models/Main';

import { ChatListView } from './views/ChatListView/ChatListView';
import { Collection } from './models/Collection';
import { ChatProps } from './models/Chat';
import { User } from './models/User';
import { Message } from './models/Message';
import { NavigationView } from './views/NavigationView/NavigationView';
import { Navigation } from './models/Navigation';


function pad(num: number, size): string {
  let res = num.toString();
  while (res.length < size) res = '0' + num;
  return res;
}

function int(max: number): number {
  return Math.floor(Math.random() * max);
}

function randomHour(): string {
  return pad(int(24), 2);
}


const userIvan = User.buildUser({
  nameInChat: 'Иван',
  picture: `https://xsgames.co/randomusers/avatar.php?g=male`,
  id: 1
})

const userVadim = User.buildUser({
  nameInChat: 'Алена',
  picture: `https://xsgames.co/randomusers/avatar.php?g=female`,
  id: 2
})

const chats = new Collection('', (json: ChatProps) => {
  return Chat.buildChat(json);
});

const messageFromIvan = Message.buildMessage({
  senderId: 1,
  content: 'Привет, меня зовут Иван. Давай встретимся на следующих выходных?',
  time: new Date(),
  isread: false
});

const messageFromVadim = Message.buildMessage({
  senderId: 1,
  content: 'Привет, меня зовут Алена.',
  time: new Date(),
  isread: false
});


const chatWithIvan = Chat.buildChat({
  id:1,
  with: userIvan,
  messages: [messageFromIvan],
  isSelected: true,
}); 

const chatWithVadim = Chat.buildChat({
  id:2,
  with: userVadim,
  messages: [messageFromVadim],
  isSelected: false
});

const data: Chat[] = [chatWithIvan, chatWithVadim];


chats.on('change', () => {
  const root = document.getElementById('root');
  if (root) {
    console.log('chats changed');
    // new NavigationView(root, 
    //   Navigation.buildNavigation({chats: chats, searchQuery:''})).render();
    new MainView(root, Main.buildMain({chats: chats, selectedChat: chatWithIvan})).render();
  }
});

chats.load(data);

