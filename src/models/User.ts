interface UserProps {
  name?: string;
  age?: number;
}
type Callback = () => void;
type Event = { name: string; handler: Callback };
export class User {
  parent: HTMLElement | null;
  content: HTMLElement = document.createElement("div");
  events: Event[] = [];
  constructor(public data: UserProps, parent: HTMLElement | null) {
    this.parent = parent;
    this.render();
    if (this.parent) this.parent.appendChild(this.content);
  }
  get(propName: string): number | string {
    return this.data[propName];
  }
  set(update: UserProps): void {
    Object.assign(this.data, update);
  }
  on(name: string, handler: Callback): void {
    this.events.push({ name, handler });
    // this.events.push(event);
    if (this.parent) this.content.addEventListener(name, handler);
  }
  render() {
    const para = document.createElement("p");
    para.innerText = "This is a paragraph";
    this.content.appendChild(para);
  }
}
