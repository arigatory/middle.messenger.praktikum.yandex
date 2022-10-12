import { ProfilePage } from './pages/Profile';
import { LoginPage } from './pages/Login';
import { RegistrationPage } from './pages/Registration';
import Router from './utils/Router';
import store from './utils/Store';

window.store = store;

window.addEventListener('DOMContentLoaded', () => {
  
  Router
    .use('/profile', ProfilePage)
    .use('/login', LoginPage) 
    .use('/', LoginPage) 
    .use('/registration', RegistrationPage)
    .start();
});
