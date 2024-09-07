import React from 'react';

function Header({ darkMode, toggleDarkMode }) {
  return (
    <header>
      <div className="container">
        <h1>Light / Dark Mode</h1>
        <button onClick={toggleDarkMode} className="toggle">
          {darkMode ? 'Light' : 'Dark'} Mode
        </button>
      </div>
    </header>
  );
}

export default Header;