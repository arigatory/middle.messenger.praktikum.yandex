import { CollectionView } from '../CollectionView';
import { Chat, ChatProps } from '../../models/Chat';
import { ChatThumbnailView } from '../ChatThumbnailView/ChatThumbnailView';

export class ChatListView extends CollectionView<Chat, ChatProps> {
  renderItem(model: Chat, itemParent: Element): void {
    const view = new ChatThumbnailView(itemParent, model);
    
    view.render();
  }
}
