import axios, { AxiosPromise, AxiosResponse } from "axios";
interface HasId {
  id?: number;
}
export class Sync<T extends HasId> {
  constructor(private rootUrl: string) {}
  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }
  save(data: T): AxiosPromise {
    const { id } = data;
    if (id) {
      // update
      return axios.put(`${this.rootUrl}/${id}`, data);
    }
    // save
    return axios.post(`${this.rootUrl}`, data);
  }
}
