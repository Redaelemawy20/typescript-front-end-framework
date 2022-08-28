import { AxiosError, AxiosResponse } from "axios";
import { Attributes } from "./Attributes";
import { Eventing } from "./Eventing";
import { Model } from "./Model";
import { Sync } from "./Sync";
interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User extends Model<UserProps> {
  private parent: HTMLElement | null;
  private content: HTMLElement = document.createElement("div");
  constructor(data: UserProps, parent: HTMLElement | null) {
    super(
      new Attributes<UserProps>(data),
      new Eventing(parent),
      new Sync<UserProps>("http://localhost:3000/users")
    );
    this.parent = parent;
    this.render();
    if (this.parent) this.parent.appendChild(this.content);
  }

  render() {
    const para = document.createElement("p");
    para.innerText = "This is a paragraph";
    this.content.appendChild(para);
  }
}
