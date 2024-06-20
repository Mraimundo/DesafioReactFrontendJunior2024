import { createContext } from "react";
import { ITask } from "../entities/Task";

interface TaskContextData {
  tasks: ITask[];
  totalOutstanding: number;
  handleAddItem: (data: ITask) => void;
  deleteTasks: (id: string) => void;
  updatedItemHandler: (data: ITask) => void;
  isClearCompleted: () => void;
  handleToggleAllDone: () => void;
}

export const TaskContext = createContext<TaskContextData>(
  {} as TaskContextData
);
