import React, { useEffect, useState } from 'react';
import { fetchTasks, createTask, updateTask, deleteTask } from '../api/tasks';
import { TextField, Button, Checkbox, List, ListItem, ListItemText, CircularProgress } from '@material-ui/core';
import { useSnackbar } from 'notistack';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    fetchTasks()
      .then(setTasks)
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  const handleCreateTask = () => {
    if (!newTaskTitle.trim()) {
      enqueueSnackbar('Task title cannot be empty', { variant: 'error' });
      return;
    }
    const newTask: Task = { id: Date.now(), title: newTaskTitle, completed: false };
    setLoading(true);
    createTask(newTask)
      .then((createdTask) => {
        setTasks([...tasks, createdTask]);
        setNewTaskTitle('');
        enqueueSnackbar('Task created successfully', { variant: 'success' });
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  };

  const handleUpdateTask = (taskId: number, updatedTask: Partial<Task>) => {
    setLoading(true);
    updateTask(taskId, updatedTask)
      .then((updated) => {
        setTasks(tasks.map((task) => (task.id === taskId ? updated : task)));
        enqueueSnackbar('Task updated successfully', { variant: 'success' });
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  };

  const handleDeleteTask = (taskId: number) => {
    setLoading(true);
    deleteTask(taskId)
      .then(() => {
        setTasks(tasks.filter((task) => task.id !== taskId));
        enqueueSnackbar('Task deleted successfully', { variant: 'success' });
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  };

  return (
    <div>
      <h1>Task List</h1>
      <TextField
        label="New Task Title"
        value={newTaskTitle}
        onChange={(e) => setNewTaskTitle(e.target.value)}
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleCreateTask} disabled={loading}>
        Add Task
      </Button>
      {loading && <CircularProgress />}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <List>
        {tasks.map((task) => (
          <ListItem key={task.id}>
            <TextField
              value={task.title}
              onChange={(e) => handleUpdateTask(task.id, { title: e.target.value })}
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <Checkbox
              checked={task.completed}
              onChange={(e) => handleUpdateTask(task.id, { completed: e.target.checked })}
            />
            <Button variant="contained" color="secondary" onClick={() => handleDeleteTask(task.id)} disabled={loading}>
              Delete
            </Button>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default TaskList;