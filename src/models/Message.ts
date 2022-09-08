import { Model } from './Model';
import { Attributes } from './Attributes';
import { Eventing } from './Eventing';
import { Collection } from './Collection';

export interface MessageProps {
  id?: number;
  senderId: number;
  text: string;
  time: Date;
}

export class Message extends Model<MessageProps> {
  static buildMessage(attrs: MessageProps) {
    return new Message(new Attributes<MessageProps>(attrs), new Eventing());
  }

  // TODO: add collection
}
