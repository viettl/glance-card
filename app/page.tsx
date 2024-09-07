'use client'

import { useEffect } from 'react'
import styles from './page.module.css'
import Icon from './components/Icon'

export default function Home() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const grid = document.querySelector(`.${styles.grid}`) as HTMLElement
      if (grid) {
        grid.style.setProperty('--x', `${e.clientX}px`)
        grid.style.setProperty('--y', `${e.clientY}px`)
      }
    }

    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <main className={styles.container}>
      <div className={styles.main}>
        <h1>Lorem Ipsum Dolor Sit Amet</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum.</p>
      </div>

      <div className={styles.gridContainer}>
        <div className={styles.grid}>
          {[
            { title: 'Lorem Ipsum', icon: 'shield-alt', message: 'Lorem: Dolor sit amet.' },
            { title: 'Consectetur Adipiscing', icon: 'user-shield', message: 'Lorem: Elit nullam euismod.' },
            { title: 'Nulla Facilisi', icon: 'wifi', message: 'Lorem: Maecenas sed diam.' },
            { title: 'Vestibulum Ante', icon: 'window-maximize', message: 'Lorem: Ipsum primis in faucibus.' },
            { title: 'Orci Luctus', icon: 'laptop', message: 'Lorem: Et ultrices posuere cubilia.' },
            { title: 'Curae Mauris', icon: 'heartbeat', message: 'Lorem: Viverra accumsan in nisl.' },
            { title: 'Nisi Porta', icon: 'user-friends', message: 'Lorem: Lorem mollis aliquam ut.' },
            { title: 'Porttitor Lacus', icon: 'clock', message: 'Lorem: Luctus accumsan tortor posuere.' },
          ].map((card, index) => (
            <div key={index} className={styles.card}>
              <Icon name={card.icon} />
              <h2>{card.title}</h2>
              <p>{card.message}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
