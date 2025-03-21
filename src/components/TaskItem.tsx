import { Task } from "../types";

type TaskItemProps = {
  task: Task;
  updateStatusTask: (
    id: Task["_id"],
    completed: Task["completed"]
  ) => Promise<void>;
  deleteTask: (id: Task["_id"]) => Promise<void>;
};

export default function TaskItem({
  task,
  updateStatusTask,
  deleteTask,
}: TaskItemProps) {
  return (
    <div
      key={task._id}
      className="bg-white shadow-sm shadow-indigo-600/15 rounded-lg overflow-hidden w-full relative hover:scale-105 transition-all duration-400 cursor-pointer"
    >
      <div className="absolute w-2 bg-pink-600 h-full left-0 top-0"></div>
      <div className="flex items-center justify-between">
        <div className="w-4/5 p-3 ps-5 space-y-1.5 text-sm overflow-hidden">
          <p className="font-bold truncate">{task.title}</p>
          <p className="truncate">{task.description}</p>
          {task.completed ? (
            <span className="bg-green-600 text-white text-xs rounded-xl py-1 px-2">
              Completado
            </span>
          ) : (
            <span className="bg-amber-500 text-white text-xs rounded-xl py-1 px-2">
              Pendiente
            </span>
          )}
        </div>
        <div className="w-1/5 pe-3 flex justify-between">
          <button
            onClick={() => updateStatusTask(task._id, !task.completed)}
            className="p-1.5 cursor-pointer border border-gray-300 rounded-md hover:bg-gray-100 transition-all duration-300"
          >
            {!task.completed ? "✅" : "⏰"}
          </button>
          <button
            onClick={() => deleteTask(task._id)}
            className="p-1.5 cursor-pointer border border-gray-300 rounded-md hover:bg-gray-100 transition-all duration-300 opacity-70 hover:opacity-100"
          >
            <span className="">❌</span>
          </button>
        </div>
      </div>
    </div>
  );
}
