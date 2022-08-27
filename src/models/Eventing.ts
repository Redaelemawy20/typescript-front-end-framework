type Callback = () => void;
type Event = { name: string; handler: Callback };
export class Eventing {
  events: Event[] = [];
  content: HTMLElement;
  constructor(content: HTMLElement) {
    this.content = content;
  }
  on(name: string, handler: Callback): void {
    this.events.push({ name, handler });
    this.content.addEventListener(name, handler);
  }
}
