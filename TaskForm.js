//TaskForm.js
import React, { useContext, useState } from 'react';
import { TaskContext } from './TaskContext';

const TaskForm = () => {
  const { addTask } = useContext(TaskContext);
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(task);
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
