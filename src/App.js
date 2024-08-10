/////////////////////////////////////
import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState(null);

  useEffect(() => {
    fetch('/tasks.json')
      .then(response => response.json())
      .then(data => setTasks(data));
  }, []);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleUpdateTask = (updatedTask) => {
    setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const handleEditTask = (task) => {
    setEditTask(task);
  };

  return (
    <div className="app-container">
      <h1>Todo List</h1>
      <TaskForm onAddTask={handleAddTask} task={editTask} onUpdateTask={handleUpdateTask} />
      <TaskList
        className="tasklists"
        tasks={tasks}
        onUpdateTask={handleUpdateTask}
        onDeleteTask={handleDeleteTask}
        onEditTask={handleEditTask}
      />
    </div>
  );
};

export default App;
