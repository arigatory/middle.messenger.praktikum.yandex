interface ModelAttributes<T> {
  set(value: T): void;
  getAll(): T;
  get<K extends keyof T>(key: K): T[K];
  update<K extends keyof T>(key: K, value: T[K]): void;
}

interface Events {
  on(eventName: string, callback: () => void): void;
  trigger(eventName: string): void;
}

export interface HasId {
  id?: number;
}

export class Model<T extends HasId> {
  constructor(private attributes: ModelAttributes<T>, private events: Events) {}

  on = this.events.on;
  trigger = this.events.trigger;
  get = this.attributes.get;
  getAll = this.attributes.getAll;

  update<K extends keyof T>(key: K, value: T[K]): void {
    this.attributes.update(key, value);
    this.events.trigger('change');
  }

  set(update: T): void {
    this.attributes.set(update);
    this.events.trigger('change');
  }
}
