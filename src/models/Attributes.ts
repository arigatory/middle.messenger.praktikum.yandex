export class Attributes<T extends Object> {
  constructor(private data: T) {}

  get = <K extends keyof T>(key: K): T[K] => this.data[key];

  set = (update: T): void => {
    Object.assign(this.data, update);
  };

  update = <K extends keyof T> (key: K, value: T[K]): void => {
    this.data[key] = value;
  };

  getAll = (): T => this.data;
}
