"use client"

import Image from 'next/image'
import styles from './notes.module.scss'
import { MouseEvent } from 'react';
import INotes from '../models/notes/INotes';

interface Props {
  notes: INotes[]
}

const Notes = ({ notes }: Props) => {
  // Change active state between recents filter and favourites filter
  const toggleFilter = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    const activeUnderline = document.querySelector<HTMLElement>(`.${styles.activeUnderline}`)

    if (activeUnderline) {
      if (e.currentTarget.innerText === 'Recents') {
        // TODO: Add state for recent becoming active
        activeUnderline.classList.add(styles.moveLeft)
        activeUnderline.classList.remove(styles.moveRight)
      } else if (e.currentTarget.innerText === 'Favourites') {
        // TODO: Add state for favourites becoming active
        activeUnderline.classList.add(styles.moveRight)
        activeUnderline.classList.remove(styles.moveLeft)
      }
    }
  }

  return (
    <section className={styles.notesContainer}>
      <h2>My Notes</h2>
      {/* Seperate no notes container into new file */}
      {notes.length <= 0 ?
        <div className={styles.noNotesContainer}>
          <Image
            src={"/assets/empty-notes-img.svg"}
            width={250}
            height={130}
            alt="No notes"
          />
          <p>{`You have not created any notes...`}</p>
        </div>
        :
        <div className={styles.mainNotesContainer}>
          <div className={styles.filterContainer}>
            <div>
              <div className={styles.recentContainer}>
                <button className={styles.recentsBtn} onClick={(e) => toggleFilter(e)}>Recents</button>
              </div>
              <div className={styles.favContainer}>
                <button className={styles.favBtn} onClick={(e) => toggleFilter(e)}>Favourites</button>
              </div>
              <div className={styles.activeUnderline}></div>
            </div>
            <div className={styles.underline}></div>
          </div>
          <input type="text" name="search-notes" placeholder="Search..." />
        </div>
      }
    </section >
  )
}

export default Notes

