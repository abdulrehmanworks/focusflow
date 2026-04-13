import React, { useState } from 'react';

export default function TaskInput({ onAddTask }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) return;
    onAddTask(text);
    setText('');
  };

  return (
    <form className="task-input-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="task-input glass-input"
        placeholder="What needs to be done?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className="btn-primary">Add Task</button>
    </form>
  );
}