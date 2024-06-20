import axios from "axios";
import { sleep } from "../utils/sleep";

export const httpClient = axios.create({
  baseURL:
    "https://my-json-server.typicode.com/EnkiGroup/DesafioReactFrontendJunior2024",
});

httpClient.interceptors.response.use(async (data) => {
  await sleep();

  return data;
});
