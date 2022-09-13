/* eslint-disable no-restricted-syntax */
import { Collection } from '../models/Collection';

export abstract class CollectionView<T, K> {
  constructor(
    public parent: Element,
    public collection: Collection<T, K>,
    public selectedItem: T,
  ) {
    this.bindModel();
  }

  abstract renderItem(model: T, itemParent: Element): void;

  bindModel(): void {
    this.collection.on('change', () => this.render());
  }

  render(): void {
    this.parent.innerHTML = '';

    const templateElement = document.createElement('template');

    for (const model of this.collection.models) {
      const itemParent = document.createElement('div');

      this.renderItem(model, itemParent);
      templateElement.content.append(itemParent);
    }

    this.parent.append(templateElement.content);
  }
}
