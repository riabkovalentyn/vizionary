import axios from 'axios';
// import process from 'process';



const API_URL = process.env.REACT_APP_API_URL;


interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export const fetchTasks = async (): Promise<Task[]> => {
  const response = await axios.get(`${API_URL}/api/v1/tasks/`);
  return response.data;
};

export const createTask = async (task: Omit<Task, 'id'>): Promise<Task> => {
  const response = await axios.post(`${API_URL}/api/v1/tasks/`, task);
  return response.data;
};

export const updateTask = async (taskId: number, updatedTask: Partial<Task>) => {
  const response = await axios.put(`${API_URL}/api/v1/tasks/${taskId}`, updatedTask);
  return response.data;
};

export const deleteTask = async (taskId:number): Promise<void> => {
  const response = await axios.delete(`${API_URL}/api/v1/tasks/${taskId}`);
  return response.data;
};