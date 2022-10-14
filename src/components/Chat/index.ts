import Block from '../../utils/Block';
import template from './chat.pug';
import './chat.scss';

interface ChatProps {
  id: number;
  title: string;
  unread_count: number;
}

export class Chat extends Block<ChatProps> {
  constructor(props: ChatProps) {
    super(props);
  }

  protected render(): DocumentFragment {
    return this.compile(template, {...this.props });
  }
}
