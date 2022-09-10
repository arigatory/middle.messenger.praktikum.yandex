import { Attributes } from './Attributes';
import { Chat, ChatProps } from './Chat';
import { Collection } from './Collection';
import { Eventing } from './Eventing';
import { Model } from './Model';

export interface NavigationProps {
  id?: number;
  searchQuery: string;
  chats: Collection<Chat, ChatProps>;
  selectedChat: Chat;
}

export class Navigation extends Model<NavigationProps> {
  static buildNavigation(attrs: NavigationProps): Navigation {
    return new Navigation(
      new Attributes<NavigationProps>(attrs),
      new Eventing()
    );
  }
}
