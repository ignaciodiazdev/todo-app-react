export type Task = {
    _id: string;
    title: string;
    description?: string;
    completed: boolean;
}

export type TaskFormData = Omit<Task, '_id'>