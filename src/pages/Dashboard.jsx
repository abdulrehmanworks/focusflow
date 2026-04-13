import React from 'react';
import Navbar from '../components/Navbar';
import TaskList from '../components/TaskList';
import Timer from '../components/Timer';
import { useLocalStorage } from '../hooks/useLocalStorage';

export default function Dashboard() {
  // Hoist state to Dashboard to potentially share task data with timer in the future
  const [tasks, setTasks] = useLocalStorage('focusflow-tasks', []);

  return (
    <div className="app-container">
      <Navbar />
      <main className="dashboard-grid">
        <section className="left-column">
          <TaskList tasks={tasks} setTasks={setTasks} />
        </section>
        <section className="right-column">
          <Timer />
        </section>
      </main>
    </div>
  );
}