import React, { useEffect, useState } from 'react';
import { fetchTasks, createTask, updateTask, deleteTask } from '../api/tasks';
import { TextField, Button, Checkbox, List, ListItem, ListItemText, CircularProgress} from '@material-ui/core';
import { useSnackbar } from 'notistack';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    fetchTasks()
      .then(setTasks)
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
    
  }, []);

  const handleCreateTask = () => {
    if (!newTaskTitle.trim()){
      enqueueSnackbar('Task title cannot be empty', { variant: 'error' });
      return
    }
    const newTask = {id: Date.now(), title: newTaskTitle, completed: false};
    setLoading(true);
    createTask(newTask)
      .then((createTask)=> {
        setTasks([...tasks, createTask]);
        setNewTaskTitle('');
        enqueueSnackbar('Task created successfully', { variant: 'success' });
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  };

  const handleUpdateTask = (taskId, updatedTask) => {
    setLoading(true)
    updateTask(taskId, updatedTask)
      .then((updated) => {
        setTasks(tasks.map((task) => (task.id === taskId ? updated : task)));
        enqueueSnackbar('Task updated successfully', { variant: 'success' });
        })
      .catch((error) => setError(error.message))
      .finally(()=> setLoading(false));

  };

  const handleDeleteTask = (taskId) => {
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
              onChange={(e) => handleUpdateTask(task.id, { ...task, title: e.target.value })}
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <Checkbox
              checked={task.completed}
              onChange={(e) => handleUpdateTask(task.id, { ...task, completed: e.target.checked })}
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