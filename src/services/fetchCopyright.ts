import { api } from "./axios";

export async function getCopyright() {
  return api.get('/copyright').then((res) => res.data);
}
