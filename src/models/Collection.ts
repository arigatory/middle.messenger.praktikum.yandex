import { Eventing } from './Eventing';

export class Collection<T, K> {
  models: T[] = [];

  events: Eventing = new Eventing();

  constructor(public rootUrl: string, public deserialize: (json: K) => T) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  load(items: T[]) : void {
    items.forEach((value: T) => {
      this.models.push(value);
    });

    this.trigger('change');
  }
}
