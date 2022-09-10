import { Chat } from '../models/Chat';
import { Message } from '../models/Message';
import { User } from '../models/User';

export class FakeDb {
  static getChats(): Chat[] {
    const userIvan = User.buildUser({
      nameInChat: 'Иван',
      picture: `https://i.pravatar.cc/150?img=3`,
      id: 1,
    });

    const userAndrey = User.buildUser({
      nameInChat: 'Андрей',
      picture: `https://i.pravatar.cc/150?img=8`,
      id: 2,
    });

    const userIgor = User.buildUser({
      nameInChat: 'Игорь',
      picture: `https://i.pravatar.cc/150?img=11`,
      id: 3,
    });

    const userAlena = User.buildUser({
      nameInChat: 'Алена',
      picture: `https://i.pravatar.cc/150?img=44`,
      id: 4,
    });

    const userLuda = User.buildUser({
      nameInChat: 'Люда',
      picture: `https://i.pravatar.cc/150?img=48`,
      id: 5,
    });

    const userAnna = User.buildUser({
      nameInChat: 'Анна',
      picture: `https://i.pravatar.cc/150?img=32`,
      id: 6,
    });

    const messageFromIvan = Message.buildMessage({
      senderId: 1,
      content:
        'Привет! Давай встретимся на следующих выходных?',
      time: new Date(),
      isread: false,
    });

    const chatWithIvan = Chat.buildChat({
      id: 1,
      with: userIvan,
      messages: Message.arraytToCollection([messageFromIvan]),
    });

    const messageFromAndrey1 = Message.buildMessage({
      senderId: 2,
      content: 'Привет, как поживаешь?',
      time: new Date(),
      isread: true,
    });

    const messageFromAndrey2 = Message.buildMessage({
      senderId: 2,
      content: 'Ответь)',
      time: new Date(),
      isread: true,
    });

    const chatWithAndrey = Chat.buildChat({
      id: 2,
      with: userAndrey,
      messages: Message.arraytToCollection([
        messageFromAndrey1,
        messageFromAndrey2,
      ]),
    });

    const messageFromIgor = Message.buildMessage({
      senderId: 3,
      content: 'До связи',
      time: new Date(),
      isread: true,
    });

    const chatWithIgor = Chat.buildChat({
      id: 3,
      with: userIgor,
      messages: Message.arraytToCollection([messageFromIgor]),
    });

    const messageFromAlena = Message.buildMessage({
      senderId: 4,
      content: 'Давно тебя не видела. Ты в Москве?',
      time: new Date(),
      isread: false,
    });

    const chatWithAlena = Chat.buildChat({
      id: 4,
      with: userAlena,
      messages: Message.arraytToCollection([messageFromAlena]),
    });

    const chatWithLuda = Chat.buildChat({
      id: 5,
      with: userLuda,
      messages: Message.arraytToCollection([]),
    });

    const chatWithAnna = Chat.buildChat({
      id: 6,
      with: userAnna,
      messages: Message.arraytToCollection([]),
    });

    return [
      chatWithAndrey,
      chatWithAlena,
      chatWithIvan,
      chatWithIgor,
      chatWithLuda,
      chatWithAnna,
    ];
  }
}
