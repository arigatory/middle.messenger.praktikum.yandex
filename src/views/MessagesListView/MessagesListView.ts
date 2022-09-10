import { CollectionView } from '../CollectionView';
import { Message, MessageProps } from '../../models/Message';
import { MessageView } from '../MessageView/MessageView';

export class MessagesListView extends CollectionView<Message, MessageProps> {
  renderItem(model: Message, itemParent: Element): void {
    new MessageView(itemParent, model).render();
  }
}
