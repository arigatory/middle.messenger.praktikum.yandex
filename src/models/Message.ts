import { Model } from './Model';
import { Attributes } from './Attributes';
import { Eventing } from './Eventing';
import { Collection } from './Collection';

export interface MessageProps {
  id?: number;
  senderId: number;
  content: string;
  time: Date;
  isread: boolean;
}

export class Message extends Model<MessageProps> {
  static buildMessage(attrs: MessageProps) {
    return new Message(new Attributes<MessageProps>(attrs), new Eventing());
  }

  static buildMessageCollection(): Collection<Message, MessageProps> {
    return new Collection<Message, MessageProps>('', (x: MessageProps) => Message.buildMessage(x));
  }

  static arraytToCollection(
    messages: Message[],
  ): Collection<Message, MessageProps> {
    const collection = new Collection<Message, MessageProps>(
      '',
      (json: MessageProps) => Message.buildMessage(json),
    );
    collection.load(messages);
    return collection;
  }
}
