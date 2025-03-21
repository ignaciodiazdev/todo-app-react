import axios from "axios"
import { BASE_URL } from "../constants/constants"
import { Task, TaskFormData } from "../types"


export const getTasksApi = async() => {
    const response = await axios.get<Task[]>(`${BASE_URL}/tasks`);
    return response.data;
}

export const postTaskApi = async(newTask: TaskFormData) => {
    const response = await axios.post<Task>(`${BASE_URL}/tasks`, newTask);
    return response;
}

export const updateTaskApi = async(id: Task['_id'], completed: Task['completed']) => {
    const response = await axios.patch(`${BASE_URL}/tasks/${id}`, {completed: completed});
    return response;
}

export const deleteTaskApi = async(id: Task['_id']) => {
    const response = await axios.delete(`${BASE_URL}/tasks/${id}`);
    return response;
}