import { ProfilePage } from './pages/Profile';
import { LoginPage } from './pages/Login';
import { RegistrationPage } from './pages/Registration';
import Router from './utils/Router';
import store from './utils/Store';
import AuthController from './controllers/AuthController';
import { ChatList } from './components/ChatList';

declare global {
  interface Window {
    store: any;
  }
}

window.store = store;

window.addEventListener('DOMContentLoaded', async () => {
  Router.use('/profile', ProfilePage)
    .use('/', LoginPage)
    .use('/registration', RegistrationPage)
    .use('/chatlist', ChatList);

  try {
    await AuthController.fetchUser();
    Router.start();

    Router.go('/profile');

  } catch (e) {
    console.error(e);
    Router.start();
    Router.go('/chatlist');
  }
});
