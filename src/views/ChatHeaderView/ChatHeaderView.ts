import { Model } from '../../models/Model';
import { View } from '../View';
import template from './ChatHeaderView.pug';
import './ChatHeaderView.scss';

export class ChatHeaderView extends View<Model<{}>,{}>{
  template(): string {
    return template({});
  }
}
