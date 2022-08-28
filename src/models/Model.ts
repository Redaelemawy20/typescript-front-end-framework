import { AxiosPromise, AxiosResponse } from "axios";
interface Attributes<T> {
  set(update: T): void;
  getAll(): T;
  get<K extends keyof T>(propName: K): T[K];
}
interface Eventing {
  on(name: string, callaback: () => void);
}
interface Sync<T> {
  save(model: T): AxiosPromise;
  fetch(id: number): AxiosPromise;
}
interface HasId {
  id?: number;
}
export class Model<T extends HasId> {
  constructor(
    private attributes: Attributes<T>,
    private events: Eventing,
    private sync: Sync<T>
  ) {}
  get on() {
    return this.events.on.bind(this.events);
  }
  get get() {
    return this.attributes.get;
  }
  get set() {
    return this.attributes.set;
  }
  fetch(): void {
    const id = this.attributes.get("id");
    if (typeof id !== "number") {
      throw new Error("Cannot fetch without an id ");
    }
    this.sync.fetch(id).then((response: AxiosResponse): void => {
      this.set(response.data);
    });
  }
  save(): void {
    this.sync
      .save(this.attributes.getAll())
      .then((response: AxiosResponse): void => {
        console.log("user saved");
      })
      .catch((error: AxiosResponse): void => {
        console.log("faild");
      });
  }
}
