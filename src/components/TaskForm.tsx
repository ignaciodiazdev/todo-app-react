import { useState } from "react";
import { TaskFormData } from "../types";
import { toast } from "react-toastify";

type TaskFormProps = {
  postTask: (newTask: TaskFormData) => Promise<void>;
};

export default function TaskForm({ postTask }: TaskFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      const newTask = { title, description, completed: false };
      postTask(newTask);
      toast.success("Tarea agregada");
      setTitle("");
      setDescription("");
    }
    console.log("vacio");
  };

  return (
    <form
      className="bg-white py-6 px-6 rounded-md space-y-5 h-fit shadow w-full lg:w-1/4 relative overflow-hidden"
      onSubmit={handleSubmit}
    >
      <div className="absolute h-3 bg-indigo-700 w-full top-0 left-0"></div>
      <h2 className="text-2xl font-bold text-center">Formulario</h2>
      <div className="flex flex-col gap-2">
        <label htmlFor="title">Título de Tarea:</label>
        <input
          id="title"
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Ingrese el título..."
          className="bg-indigo-500/5 px-3 py-2 rounded-sm text-sm focus:outline-none w-full  border border-indigo-500/15 text-gray-700"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="description">Descripción:</label>
        <textarea
          id="description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Ingrese la descripción..."
          className="bg-indigo-500/5 px-3 py-2 rounded-sm text-sm focus:outline-none w-full  border border-indigo-500/15 text-gray-700 resize-none min-h-40"
        />
      </div>
      <button
        type="submit"
        className="bg-indigo-600 text-white cursor-pointer p-3 rounded-md w-full hover:bg-indigo-500 transition-all duration-300"
      >
        Agregar Tarea
      </button>
    </form>
  );
}
