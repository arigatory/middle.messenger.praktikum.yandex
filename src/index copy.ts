import { Chat, ChatProps } from './models/Chat';
import { MainView } from './views/MainView/MainView';
import { Main } from './models/Main';
import { Collection } from './models/Collection';

import { FakeDb } from './utils/fake-db';
import { ProfileView } from './views/ProfileView/ProfileView';
import { Profile } from './models/Profile';
import { Login } from './models/Login';
import { LoginView } from './views/LoginView/LoginView';
import { RegistrationView } from './views/RegistrationView/RegistrationView';
import { Registration } from './models/Registration';

const data = FakeDb.getChats();
const selectedChat: Chat = data[0];

const chats = new Collection('', (json: ChatProps) => Chat.buildChat(json));

chats.load(data);
const root = document.getElementById('root');
const path = document.location.pathname;

if (root) {
  if (path === '/profile') {
    new ProfileView(
      root,
      Profile.buildProfile({ picture: 'https://i.pravatar.cc/150?img=12' }),
    ).render();
  } else if (path === '/login') {
    new LoginView(root, Login.buildLogin()).render();
  } else if (path === '/registration') {
    new RegistrationView(root, Registration.buildRegistration()).render();
  } else {
    new MainView(root, Main.buildMain({ chats, selectedChat })).render();
  }
}
