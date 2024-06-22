import { useCallback, useEffect, useState } from "react";
import { TaskContext } from "./task-context";
import { Loader } from "../components/Loader";
import { ITask } from "../entities/Task";
import { tasksService } from "../services/tasks";
import { Confetti } from "../components/Confetti";

type TaskProviderProps = {
  children: React.ReactNode;
};

export function TaskProvider(props: TaskProviderProps) {
  const { children } = props;
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [allTasksDone, setAllTasksDone] = useState(false);

  const loadTasks = useCallback(async () => {
    try {
      setIsLoading(true);
      const result = await tasksService.getAllTasks();
      setTasks(result);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  useEffect(() => {
    if (tasks.length === 0) {
      return;
    }
    const checkAllTasksCompleted = () => {
      const allTasksCompleted = tasks.every((task) => task.isDone);

      if (allTasksCompleted) {
        setAllTasksDone(true);
      } else {
        setAllTasksDone(false);
      }
    };

    checkAllTasksCompleted();
  }, [tasks]);

  const updatedItemHandler = useCallback(
    ({ id, title, isDone }: ITask) => {
      const updatedTasks = tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            title: title,
            isDone: isDone,
          };
        }

        return task;
      });

      setTasks(updatedTasks);
    },
    [tasks]
  );

  const handleAddItem = useCallback(
    (task: ITask) => {
      setTasks([task, ...tasks]);
    },
    [tasks]
  );

  const handleToggleAllDone = useCallback(() => {
    const allTasksAreDone = tasks.every((task) => task.isDone);
    const updatedTasks = tasks.map((task) => ({
      ...task,
      isDone: !allTasksAreDone,
    }));
    setTasks(updatedTasks);
  }, [tasks]);

  const isClearCompleted = useCallback(() => {
    setTasks(tasks.filter((item) => item.isDone !== true));
  }, [tasks]);

  const deleteTasks = useCallback(
    (taskId: string) => {
      setTasks(tasks.filter((task) => task.id !== taskId));
    },
    [tasks]
  );

  const totalOutstanding = tasks.reduce((acc, value) => {
    if (!value.isDone) {
      return acc + 1;
    }
    return acc;
  }, 0);

  if (isLoading) {
    return <Loader isLoading={isLoading} />;
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        handleAddItem,
        handleToggleAllDone,
        isClearCompleted,
        deleteTasks,
        totalOutstanding,
        updatedItemHandler,
      }}
    >
      {allTasksDone && <Confetti show={allTasksDone} />}
      {children}
    </TaskContext.Provider>
  );
}
