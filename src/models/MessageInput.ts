import { Attributes } from './Attributes';
import { Eventing } from './Eventing';
import { Model } from './Model';

export interface MessageInputProps {
  id?: number;
  text: string;
  picUrl?: string;
}

export class MessageInput extends Model<MessageInputProps> {
  static buildMessageInput(attrs: MessageInputProps) {
    return new MessageInput(
      new Attributes<MessageInputProps>(attrs),
      new Eventing()
    );
  }
}
