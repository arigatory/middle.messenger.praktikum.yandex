import Block from '../../utils/Block';
import template from './messageInput.pug';
import './messageInput.scss';

export interface MessageInputProps {
  label: string;
  type: string;
  name: string;
  placeholder?: string;
}

export class MessageInput extends Block<MessageInputProps> {
  public getName() {
    return (this.element as HTMLInputElement).name;
  }

  public getValue() {
    return (this.element as HTMLInputElement).value;
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
