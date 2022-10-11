import { LoginPage } from './pages/Login';
import { RegistrationPage } from './pages/Registration';
window.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#app')!;

  const loginPage = new LoginPage({});
  const registrationPage = new RegistrationPage({});

  root.append(registrationPage.getContent()!);

  loginPage.dispatchComponentDidMount();
});
