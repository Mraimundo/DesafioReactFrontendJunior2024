import { useContext } from "react";
import { TaskContext } from "../contexts/task-context";

export function useTasks() {
  const context = useContext(TaskContext);
  return context;
}
