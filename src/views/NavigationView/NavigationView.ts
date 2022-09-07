import { ChatPreview, ChatPreviewProps } from '../../models/ChatPreview';
import { View } from '../View';
import template from './NavigationView.pug';
import './NavigationView.scss';

export class NavigationView extends View<ChatPreview, ChatPreviewProps> {
  template(): string {
    console.log('template');
    return template({
      messages: [
        { name: 'Иван', time: '10:39', counter: 1 },
        { name: 'Андрей', time: '10:49', counter: 2 },
        { name: 'Андрей', time: '10:49', counter: 3 },
        { name: 'Андрей', time: '10:49', counter: 4 },
        { name: 'Андрей', time: '10:49', counter: 2 },
        { name: 'Андрей', time: '10:49', counter: 2 },
      ],
    });
  }
}
