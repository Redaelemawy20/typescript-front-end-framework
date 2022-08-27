import { Attributes } from "./Attributes";
import { Eventing } from "./Eventing";
interface UserProps {
  name?: string;
  age?: number;
}

export class User {
  attibutes: Attributes<UserProps>;
  parent: HTMLElement | null;
  content: HTMLElement = document.createElement("div");
  events: Eventing = new Eventing(this.content);
  constructor(data: UserProps, parent: HTMLElement | null) {
    this.parent = parent;
    this.attibutes = new Attributes(data);
    this.render();
    if (this.parent) this.parent.appendChild(this.content);
  }
  render() {
    const para = document.createElement("p");
    para.innerText = "This is a paragraph";
    this.content.appendChild(para);
  }
}
