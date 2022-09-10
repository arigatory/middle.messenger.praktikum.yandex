import { Model } from './Model';
import { Attributes } from './Attributes';
import { Eventing } from './Eventing';
import { Collection } from './Collection';
import { Message, MessageProps } from './Message';
import { User } from './User';

export interface ChatProps {
  id?: number;
  with?: User;
  messages: Collection<Message, MessageProps>;
}

export class Chat extends Model<ChatProps> {
  static buildChat(attrs: ChatProps) {
    return new Chat(new Attributes<ChatProps>(attrs), new Eventing());
  }

  static buildChatCollection(): Collection<Chat, ChatProps> {
    return new Collection<Chat, ChatProps>('', (json: ChatProps) => Chat.buildChat(json));
  }
}
