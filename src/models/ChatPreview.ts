import { ApiSync } from "./ApiSync";
import { Attributes } from "./Attributes";
import { Eventing } from "./Eventing";
import { Model } from "./Model";

export interface ChatPreviewProps {
  id?: number;
  picture: string;
  titles: string;
  text: string;
  fromYou: boolean;
}

export class ChatPreview extends Model<ChatPreviewProps> {
  static buildChatPreview(attrs: ChatPreviewProps) {
    return new ChatPreview(
      new Attributes<ChatPreviewProps>(attrs),
      new Eventing(),
      new ApiSync<ChatPreviewProps>("test")
    )
  };
}