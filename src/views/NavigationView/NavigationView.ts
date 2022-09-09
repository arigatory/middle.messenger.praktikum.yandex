import { Chat, ChatProps } from '../../models/Chat';
import { ChatPreview, ChatPreviewProps } from '../../models/ChatPreview';
import { CollectionView } from '../CollectionView';
import { View } from '../View';
import template from './NavigationView.pug';
import './NavigationView.scss';

export class NavigationView extends CollectionView<Chat, ChatProps> {
  renderItem(model: Chat, itemParent: Element): void {
    throw new Error('Method not implemented.');
  }
}
