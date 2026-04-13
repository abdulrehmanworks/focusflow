import React, { useState, useEffect } from 'react';

export default function Timer() {
  const DEFAULT_TIME = 25 * 60; // 25 minutes in seconds
  const [timeLeft, setTimeLeft] = useState(DEFAULT_TIME);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(time => time - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
    }
    return () => clearInterval(interval); // Cleanup to prevent memory leaks
  }, [isActive, timeLeft]);

  const toggleTimer = () => setIsActive(!isActive);
  
  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(DEFAULT_TIME);
  };

  // Format MM:SS
  const minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
  const seconds = (timeLeft % 60).toString().padStart(2, '0');

  // Calculate SVG stroke offset for the visual progress ring
  const progress = ((DEFAULT_TIME - timeLeft) / DEFAULT_TIME) * 100;
  const strokeDashoffset = 283 - (283 * progress) / 100;

  return (
    <div className="timer-container glass-panel">
      <h2>Focus Session</h2>
      
      <div className="timer-display">
        <svg className="timer-svg" viewBox="0 0 100 100">
          <circle className="timer-track" cx="50" cy="50" r="45" />
          <circle 
            className="timer-progress" 
            cx="50" cy="50" r="45" 
            strokeDasharray="283"
            strokeDashoffset={strokeDashoffset}
          />
        </svg>
        <div className="time-text">{minutes}:{seconds}</div>
      </div>

      <div className="timer-controls">
        <button className={`btn-primary ${isActive ? 'pause' : 'start'}`} onClick={toggleTimer}>
          {isActive ? 'Pause' : 'Start Focus'}
        </button>
        <button className="btn-secondary" onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}