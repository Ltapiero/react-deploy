import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskList() {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return (
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-2xl  font-bold text-white mb-3 ">
          No hay tareas aún
        </h1>
      </div>
    );
  }

  return (
    <div className="grid grid-task gap-2">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
