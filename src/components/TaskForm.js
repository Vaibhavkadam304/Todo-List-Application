import { useState, useEffect } from 'react';
import './TaskForm.css';
const TaskForm = ({ onAddTask, task = {}, onUpdateTask }) => {
  const [title, setTitle] = useState(task?.title || '');
  const [description, setDescription] = useState(task?.description || '');
  useEffect(() => {
    if (task) {
      setTitle(task.title || '');
      setDescription(task.description || '');
    } else {
      setTitle('');
      setDescription('');
    }
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;

    const newTask = {
      title,
      description,
      id: task?.id || Date.now(),
      timestamp: new Date().toISOString(),
    };

    if (task?.id) {
      onUpdateTask(newTask);
    } else {
      onAddTask(newTask);
    }

    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
     <input
    type="text"
    value={title}
    onChange={(e) => setTitle(e.target.value)}
    placeholder="Task Title"
  />
   <textarea
    value={description}
    onChange={(e) => setDescription(e.target.value)}
    placeholder="Task Description"
  />
  <button type="submit">{task?.id ? 'Update Task' : 'Add Task'}</button>
  </form>
  );
};

export default TaskForm;
