//App.js
import React from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import { TaskProvider } from './TaskContext';

function App() {
  return (
    <TaskProvider>
      <div className="App">
        <h1>Task Management App</h1>
        <TaskForm />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;
