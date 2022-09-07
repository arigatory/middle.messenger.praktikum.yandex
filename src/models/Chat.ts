import { Model } from './Model';
import { Attributes } from './Attributes';
import { Eventing } from './Eventing';
import { Collection } from './Collection';

export interface ChatProps {
  id?: number;
  otherUserId: number;
  messages?: string[];
}

export class Chat extends Model<ChatProps> {
  static buildChat(attrs: ChatProps) {
    return new Chat(new Attributes<ChatProps>(attrs), new Eventing());
  }

  // TODO: add collection
}
