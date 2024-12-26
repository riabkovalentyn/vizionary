import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const fetchTasks = async () => {
  const response = await axios.get(`${API_URL}/api/v1/tasks/`);
  return response.data;
};

export const createTask = async (task) => {
  const response = await axios.post(`${API_URL}/api/v1/tasks/`, task);
  return response.data;
};

export const updateTask = async (taskId, updatedTask) => {
  const response = await axios.put(`${API_URL}/api/v1/tasks/${taskId}`, updatedTask);
  return response.data;
};

export const deleteTask = async (taskId) => {
  const response = await axios.delete(`${API_URL}/api/v1/tasks/${taskId}`);
  return response.data;
};