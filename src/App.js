// App.js
import React, { useState } from 'react';
import TodoList from './todolist/index';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTaskText, setNewTaskText] = useState('');
  const newvalue = "hello neetu"
  const handleAddTask = () => {
    if (newTaskText.trim() === '') return;
    const newTask = {
      id: Date.now(),
      text: newTaskText,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setNewTaskText('');
  };

  const handleTaskToggle = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div>
      <input
        type="text"
        value={newTaskText}
        onChange={(e) => setNewTaskText(e.target.value)}
        placeholder="Enter new task"
      />
      <button onClick={handleAddTask}>Add Task</button>
        <TodoList tasks={tasks} onTaskToggle={handleTaskToggle} newvalue = {newvalue}/>
    </div>
  );
};

export default App;
