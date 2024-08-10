import { useState } from 'react';
import './TaskItem.css';
const TaskItem = ({ task, onUpdateTask, onDeleteTask, onEditTask }) => {
    const [expanded, setExpanded] = useState(false);
  
    const handleToggleExpand = () => setExpanded(!expanded);
    const handleMarkAsDone = () => onUpdateTask({ ...task, completed: !task.completed });
  
    return (
      <div className={`task-item ${expanded ? 'expanded' : ''}`}>
        <h3 onClick={handleToggleExpand}>
          {task.title} {task.completed && '(Done)'}
        </h3>
        {expanded && (
          <div>
            <p>{task.description}</p>
            <p>Last updated: {new Date(task.timestamp).toLocaleString()}</p>
            <button className="mark-done" onClick={handleMarkAsDone}>
              Update {task.completed ? 'Undone' : 'Done'}
            </button>
            <button className="edit" onClick={() => onEditTask(task)}>Edit</button>
            <button className="delete" onClick={() => onDeleteTask(task.id)}>Delete</button>
          </div>
        )}
      </div>
    );
  };
  
  export default TaskItem;
  