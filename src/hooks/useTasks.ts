import { useEffect, useState } from "react";
import { Task } from "../types";
import { getTasksApi } from "../api/tasks";

export default function useTasks() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await getTasksApi();
          setTasks(data);
        } catch (err) {
          setError("Error fetching tasks");
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);
  
    return { tasks, setTasks, loading, error };
}
