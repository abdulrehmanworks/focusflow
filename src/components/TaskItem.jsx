import React from 'react';

export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className={`task-item glass-panel-subtle ${task.completed ? 'completed' : ''}`}>
      <label className="task-label">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="custom-checkbox"
        />
        <span className="task-text">{task.text}</span>
      </label>
      <button 
        onClick={() => onDelete(task.id)} 
        className="btn-icon delete-btn"
        aria-label="Delete task"
      >
        ×
      </button>
    </li>
  );
}