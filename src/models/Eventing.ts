type Callback = () => void;
type Event = { name: string; handler: Callback };
export class Eventing {
  events: Event[] = [];

  constructor(private content: HTMLElement | null) {}
  on(name: string, handler: Callback): void {
    this.events.push({ name, handler });
    if (this.content) this.content.addEventListener(name, handler);
  }
}
