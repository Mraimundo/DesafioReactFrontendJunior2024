import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { TaskItem } from "../TaskItem";
import { useTasks } from "../../hooks";

export function Tasks() {
  const { tasks } = useTasks();

  const { pathname: route } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (route === "/") {
      navigate("/all");
    }
  }, [navigate, route]);

  const filteredTasks = () => {
    switch (route) {
      case "/active":
        return tasks.filter((task) => !task.isDone);
      case "/completed":
        return tasks.filter((tasks) => tasks.isDone);
      default:
        return tasks;
    }
  };

  return (
    <div>
      {filteredTasks &&
        filteredTasks().map((task) => (
          <div key={task.id!}>
            <TaskItem item={task} />
          </div>
        ))}
    </div>
  );
}
