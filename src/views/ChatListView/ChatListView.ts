import { CollectionView } from '../CollectionView';
import { Chat, ChatProps } from '../../models/Chat';
import { ChatThumbnailView } from '../ChatThumbnailView/ChatThumbnailView';
import { Collection } from '../../models/Collection';

export class ChatListView extends CollectionView<Chat, ChatProps> {
  constructor(
    public parent: Element,
    public collection: Collection<Chat, ChatProps>,
    public selectedItem: Chat,
    public setSelectedChat: (selectedChat: Chat) => void,
  ) {
    super(parent, collection, selectedItem);
  }

  renderItem(model: Chat, itemParent: Element): void {
    new ChatThumbnailView(
      itemParent,
      model,
      this.selectedItem,
      this.setSelectedChat,
    ).render();
  }
}
