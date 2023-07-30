// Task.js
import React from 'react';

const Task = ({ task, onTaskToggle }) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onTaskToggle(task.id)}
      />
      <span>{task.text}</span>
    </div>
  );
};

export default Task;
