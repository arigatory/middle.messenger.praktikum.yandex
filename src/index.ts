import { MessageInput } from './models/MessageInput';
import { MessageInputView } from './views/MessageInputView/MessageInputView';
import { ChatHeaderView } from './views/ChatHeaderView/ChatHeaderView';
import { ChatPreview } from './models/ChatPreview';
import { ChatDetailView } from './views/ChatDetailView/ChatDetailView';
import { Chat } from './models/Chat';

const root = document.getElementById('root');

const message = Chat.buildChat({
  id: 1,
  otherUserId: 1,
  messages: ["1", "2", "3", "4", "5", "6", "7", "8"],
});

if (root) {
  new ChatDetailView(root, message).render();
}
