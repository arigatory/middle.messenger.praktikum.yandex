import { Model } from './Model';
import { Attributes } from './Attributes';
import { Eventing } from './Eventing';
import { Chat, ChatProps } from './Chat';
import { Collection } from './Collection';

export interface MainProps {
  // id of current user
  id?: number;
  chats: Collection<Chat, ChatProps>;
  selectedChat: Chat;
}

export class Main extends Model<MainProps> {
  static buildMain(attrs: MainProps): Main {
    return new Main(new Attributes<MainProps>(attrs), new Eventing());
  }
}
