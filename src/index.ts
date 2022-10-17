import { ProfilePage } from './pages/Profile';
import { LoginPage } from './pages/Login';
import { RegistrationPage } from './pages/Registration';
import Router from './utils/Router';
import store from './utils/Store';
import AuthController from './controllers/AuthController';
import { ChatsList } from './components/ChatsList';
import { MessengerPage } from './pages/Messenger';
import { NotFoundPage } from './pages/NotFound';
import { PasswordChangePage } from './pages/PasswordChange';
import { SuccessPage } from './pages/Success';
import { EditAccountPage } from './pages/EditAccount';

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
    .use('/messenger', MessengerPage)
    .use('/passwordChange', PasswordChangePage)
    .use('/editAccount', EditAccountPage)
    .use('/success', SuccessPage)
    .use('/notFound', NotFoundPage);
  Router.setNotFoundPage(new NotFoundPage({}));
  try {
    await AuthController.fetchUser();
    Router.start();
  } catch (e: any) {
    if (e.reason === 'Cookie is not valid') {
      Router.go('/');
    } else {
      Router.go('/notFound');
    }
  }
});
