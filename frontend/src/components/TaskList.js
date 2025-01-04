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

  const handleCreateTask = (newTask) => {
    createTask(newTask).then((createdTask) => {
      setTasks([...tasks, createdTask]);
    });
  };

  const handleUpdateTask = (taskId, updatedTask) => {
    updateTask(taskId, updatedTask).then((updated) => {
      setTasks(tasks.map((task) => (task.id === taskId ? updated : task)));
    });
  };

  const handleDeleteTask = (taskId) => {
    deleteTask(taskId).then(() => {
      setTasks(tasks.filter((task) => task.id !== taskId));
    });
  };

  return (
    <div>
      <h1>Task List</h1>
      <input
        type="text"
        value={newTaskTitle}
        onChange={(e) => setNewTaskTitle(e.target.value)}
        placeholder="New task title"
      />
      <button onClick={handleCreateTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="text"
              value={task.title}
              onChange={(e) =>
                handleUpdateTask(task.id, { ...task, title: e.target.value })
              }
            />
            <input
              type="checkbox"
              checked={task.completed}
              onChange={(e) =>
                handleUpdateTask(task.id, { ...task, completed: e.target.checked })
              }
            />
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;