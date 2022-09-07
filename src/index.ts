import { MessageInput } from './models/MessageInput';
import { MessageInputView } from './views/MessageInputView/MessageInputView';
import { ChatHeaderView } from './views/ChatHeaderView/ChatHeaderView';
import { ChatPreview } from './models/ChatPreview';

const root = document.getElementById('root');

let messageInput = MessageInput.buildMessageInput({ text: 'Hello, world!' });

console.log(messageInput);

let chat = ChatPreview.buildChatPreview({
  id: 1,
  picture: 'string',
  titles: 'string',
  text: 'string',
  fromYou: false,
});
if (root) {
  // new MessageInputView(root, messageInput).render();
  new ChatHeaderView(root,chat).render();
}

// import { ChatPreview } from "./models/ChatPreview";
// import { NavigationView } from "./views/NavigationView/NavigationView";

// const root = document.getElementById('root');

// let chat = ChatPreview.buildChatPreview({
//   id: 1,
//   picture: 'string',
//   titles: "string",
//   text: "string",
//   fromYou:false,

// });

// console.log("Rendering chat preview...");

// if (root) {
//   new NavigationView(root, chat).render();
// }
