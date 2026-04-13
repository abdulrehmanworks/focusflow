import React, { useState } from 'react';
import TaskItem from './TaskItem';
import TaskInput from './TaskInput';

export default function TaskList({ tasks, setTasks }) {
  const [filter, setFilter] = useState('ALL'); // 'ALL', 'PENDING', 'COMPLETED'

  const addTask = (text) => {
    const newTask = { id: Date.now(), text, completed: false };
    setTasks([newTask, ...tasks]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'PENDING') return !task.completed;
    if (filter === 'COMPLETED') return task.completed;
    return true;
  });

  return (
    <div className="task-manager glass-panel">
      <h2>Your Tasks</h2>
      <TaskInput onAddTask={addTask} />
      
      <div className="filter-tabs">
        {['ALL', 'PENDING', 'COMPLETED'].map(f => (
          <button 
            key={f}
            className={`filter-btn ${filter === f ? 'active' : ''}`}
            onClick={() => setFilter(f)}
          >
            {f.charAt(0) + f.slice(1).toLowerCase()}
          </button>
        ))}
      </div>

      <ul className="task-list">
        {filteredTasks.length > 0 ? (
          filteredTasks.map(task => (
            <TaskItem 
              key={task.id} 
              task={task} 
              onToggle={toggleTask} 
              onDelete={deleteTask} 
            />
          ))
        ) : (
          <div className="empty-state">
            <div className="empty-icon">✓</div>
            <p>You're all caught up!</p>
          </div>
        )}
      </ul>
    </div>
  );
}