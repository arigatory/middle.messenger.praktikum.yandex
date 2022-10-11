import { LoginPage } from './pages/Login';
import { RegistrationPage } from './pages/Registration';
import Router from './utils/Router';
window.addEventListener('DOMContentLoaded', () => {
  
  Router
    .use('/', LoginPage)
    .use('/login', LoginPage)
    .use('/registration', RegistrationPage)
    .start();
});
