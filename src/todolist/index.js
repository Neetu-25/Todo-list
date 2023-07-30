// TodoList.js
import React from 'react';
import Task from './Task';

const TodoList = ({ tasks, onTaskToggle,newvalue }) => {
  return (
    <div>
        {newvalue}
      {tasks.map((task) => (
        <Task key={task.id} task={task} onTaskToggle={onTaskToggle} />
      ))}
    </div>
  );
};

export default TodoList;
