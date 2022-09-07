import { ChatPreview } from "./models/ChatPreview";
import { NavigationView } from "./views/NavigationView";

const root = document.getElementById('root');

let chat = ChatPreview.buildChatPreview({
  id: 1,
  picture: 'string',
  titles: "string",
  text: "string",
  fromYou:false,

});

console.log("Rendering chat preview...");

if (root) {
  new NavigationView(root, chat).render();
}