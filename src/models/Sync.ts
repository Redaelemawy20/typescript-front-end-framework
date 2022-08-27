import axios, { AxiosResponse } from "axios";
export class Sync {
  fetch(): void {
    axios
      .get("http://localhost:3000/users/")
      .then((response: AxiosResponse): void => {});
  }
}
