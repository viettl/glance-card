'use client'

import React, { useState, useEffect } from 'react'
import styles from './darkmode.module.css'

export default function DarkMode() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)")
    setDarkMode(prefersDarkScheme.matches)

    const handleChange = (e: MediaQueryListEvent) => setDarkMode(e.matches)
    prefersDarkScheme.addListener(handleChange)

    return () => prefersDarkScheme.removeListener(handleChange)
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className={`${styles.App} ${darkMode ? styles.dark : styles.light}`}>
      <header>
        <div className={styles.container}>
          <h1>Light / Dark Mode</h1>
          <button onClick={toggleDarkMode} className={styles.toggle}>
            {darkMode ? 'Light' : 'Dark'} Mode
          </button>
        </div>
      </header>
      <main>
        <div className={styles.container}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem aspernatur distinctio laudantium dolores. Nulla quibusdam reprehenderit eum sit minus aliquid!
          </p>
        </div>
      </main>
    </div>
  )
}