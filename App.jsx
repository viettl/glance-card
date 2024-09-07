import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    setDarkMode(prefersDarkScheme.matches);

    const handleChange = (e) => setDarkMode(e.matches);
    prefersDarkScheme.addListener(handleChange);

    return () => prefersDarkScheme.removeListener(handleChange);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark' : 'light'}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Main />
    </div>
  );
}

export default App;