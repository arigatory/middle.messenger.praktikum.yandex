import { ChatPreview, ChatPreviewProps } from '../models/ChatPreview';
import { View } from './View';
import pug from 'pug';
import '../../src/index/index.scss';
export class NavigationView extends View<ChatPreview, ChatPreviewProps> {
  template(): string {
    return pug.render(`
doctype html
html(lang="en")
head
  meta(charset="utf-8")
  meta(http-equiv="X-UA-Compatible" content="IE=edge")
  meta(name="viewport" content="width=device-width, initial-scale=1.0")
  title Chat
body
  - var messages = [{name: Андрей, time: '10:49', counter: 2},{name: Андрей, time: '10:49', counter: 2},{name: Андрей, time: '10:49', counter: 2},{name: Андрей, time: '10:49', counter: 2},{name: Андрей, time: '10:49', counter: 2},{name: Андрей, time: '10:49', counter: 2},{name: Андрей, time: '10:49', counter: 2},{name: Андрей, time: '10:49', counter: 2},{name: Андрей, time: '10:49', counter: 2},{name: Андрей, time: '10:49', counter: 2},]
  .content
    .navigation
      .navigation__top
        a.profile-link(href="../login/login.pug") Логин
        a.profile-link(href="../profile/profile.pug") Профиль
        a.profile-link(href="../add-user/add-user.pug") Добавить пользователя
        a.profile-link(href="../delete-user/delete-user.pug") Удалить пользователя
        a.profile-link(href="../errors/error500.pug") Ошибка 500
        a.profile-link(href="../errors/error404.pug") Ошибка 404
        input.navigation__search(type="text" placeholder="Поиск")
      ul.chat-list 
      each message in messages
        li.chat-item
          .chat-item__img
          .chat-item__mid-col
            h4.chat-item__name Андрей
            p.chat-item__preview Изображение
          .chat-item__right-col
            time.chat-item__time 10:49
            p.chat-item__new-counter 2
    .detail
      .detail__content
        p.detail__text Выберите чат чтобы отправить сообщение
  `);
  }
}
