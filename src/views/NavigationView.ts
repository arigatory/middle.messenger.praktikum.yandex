import { ChatPreview, ChatPreviewProps } from '../models/ChatPreview';
import { View } from './View';

import template from './view.pug';

import '../../src/index/index.scss';
export class NavigationView extends View<ChatPreview, ChatPreviewProps> {
  template(): string {
    return template({});
  }
}
