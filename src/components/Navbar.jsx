import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar glass-panel">
      <div className="logo-container">
        <div className="logo-icon"></div>
        <h1 className="logo-text">FocusFlow</h1>
      </div>
      <div className="nav-links">
        <span className="nav-item active">Dashboard</span>
    
      </div>
    </nav>
  );
}