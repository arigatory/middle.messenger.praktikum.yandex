import { ProfilePage } from './pages/Profile';
import { LoginPage } from './pages/Login';
import { RegistrationPage } from './pages/Registration';
import Router from './utils/Router';
import store from './utils/Store';
import AuthController from './controllers/AuthController';
import { ChatsList } from './components/ChatsList';
import { MessengerPage } from './pages/Messenger';

declare global {
  interface Window {
    store: any;
  }
}

window.store = store;

window.addEventListener('DOMContentLoaded', async () => {
  Router.use('/settings', ProfilePage)
    .use('/', LoginPage)
    .use('/sign-up', RegistrationPage)
    .use('/chatslist', ChatsList)
    .use('/messenger', MessengerPage);

  try {
    await AuthController.fetchUser();
    Router.start();
    Router.go('/messenger');

  } catch (e) {
    console.error(e);
    Router.start();
    Router.go('/');
  }
});
