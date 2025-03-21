import TaskList from "./components/TaskList";
import { useEffect } from "react";
import TaskForm from "./components/TaskForm";
import useTasks from "./hooks/useTasks";
import { ToastContainer } from "react-toastify";
import { Task, TaskFormData } from "./types";
import {
  deleteTaskApi,
  getTasksApi,
  postTaskApi,
  updateTaskApi,
} from "./api/tasks";

function App() {
  const { tasks, setTasks, loading, error } = useTasks();

  const handlePostTask = async (newTask: TaskFormData) => {
    try {
      await postTaskApi(newTask);
      const updatedTasks = await getTasksApi();
      setTasks(updatedTasks);
    } catch (err) {
      console.error("Error posting task:", err);
    }
  };

  const handleUpdateStatusTask = async (
    id: Task["_id"],
    completed: Task["completed"]
  ) => {
    try {
      await updateTaskApi(id, completed);
      const updatedTasks = await getTasksApi();
      setTasks(updatedTasks);
    } catch (err) {
      console.error("Error updating task:", err);
    }
  };

  const handleDeleteTask = async (id: Task["_id"]) => {
    try {
      await deleteTaskApi(id);
      const updatedTasks = await getTasksApi();
      setTasks(updatedTasks);
    } catch (err) {
      console.error("Error deleting task:", err);
    }
  };

  useEffect(() => {
    if (error) {
      console.log(error);
    }
  }, [error]);

  if (loading) return <div>Cargando...</div>;

  return (
    <main className="px-5 max-w-7xl 2xl:max-w-[1450px] m-auto font-display">
      <h1 className="font-black text-4xl text-center my-8">
        Aplicación ToDo - Ignacio Diaz
      </h1>
      <div className="flex flex-col gap-10 lg:flex-row">
        <TaskForm postTask={handlePostTask} />
        <TaskList
          tasks={tasks}
          updateStatusTask={handleUpdateStatusTask}
          deleteTask={handleDeleteTask}
        />
      </div>
      <ToastContainer
        position="bottom-right"
        closeOnClick={true}
        autoClose={3000}
      />
    </main>
  );
}

export default App;
