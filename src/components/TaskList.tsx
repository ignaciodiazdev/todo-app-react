import { Task } from "../types";
import TaskItem from "./TaskItem";

type TaskListProps = {
  tasks: Task[];
  updateStatusTask: (
    id: Task["_id"],
    completed: Task["completed"]
  ) => Promise<void>;
  deleteTask: (id: Task["_id"]) => Promise<void>;
};

export default function TaskList({
  tasks,
  updateStatusTask,
  deleteTask,
}: TaskListProps) {
  const completedTasks = tasks.filter((task) => task.completed);
  const pendingTasks = tasks.filter((task) => !task.completed);

  return (
    <section className="w-full lg:w-3/4 flex flex-col gap-5 md:flex-row ">
      <div className="md:w-1/2">
        <h2 className="font-bold text-lg text-center bg-amber-500 text-white rounded-sm py-1 mb-5">
          Pendientes
        </h2>
        <div className="flex flex-col gap-4">
          {pendingTasks.map((task) => (
            <TaskItem
              key={task._id}
              task={task}
              updateStatusTask={updateStatusTask}
              deleteTask={deleteTask}
            />
          ))}
        </div>
      </div>
      <div className="md:w-1/2">
        <h2 className="font-bold text-lg text-center bg-green-600 text-white rounded-sm py-1 mb-5">
          Completadas
        </h2>
        <div className="flex flex-col gap-4">
          {completedTasks.map((task) => (
            <TaskItem
              key={task._id}
              task={task}
              updateStatusTask={updateStatusTask}
              deleteTask={deleteTask}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
