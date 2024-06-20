import { httpClient } from "../httpClient";

export async function getAllTasks() {
  const { data } = await httpClient.get("/todos");

  return data;
}
