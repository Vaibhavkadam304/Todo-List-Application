// import TaskItem from './TaskItem';
// import './TaskList.css';
// const TaskList = ({ tasks, onUpdateTask, onDeleteTask, onEditTask }) => (
//   <div>
//     {tasks.map(task => (
//       <TaskItem
//         key={task.id}
//         task={task}
//         onUpdateTask={onUpdateTask}
//         onDeleteTask={onDeleteTask}
//         onEditTask={onEditTask}
//       />
//     ))}
//   </div>
// );

// export default TaskList;
////////////////////////////////////////
// src/components/TasksPage.js

import React from 'react';
import TaskItem from './TaskItem';
import './TaskList.css';

const TasksPage = ({ tasks, onUpdateTask, onDeleteTask, onEditTask }) => {
  return (
    <div className="tasks-page">
      <h2>All Tasks</h2>
      {tasks.length > 0 ? (
        tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onUpdateTask={onUpdateTask}
            onDeleteTask={onDeleteTask}
            onEditTask={onEditTask}
          />
        ))
      ) : (
        <p>No tasks available.</p>
      )}
    </div>
  );
};

export default TasksPage;
