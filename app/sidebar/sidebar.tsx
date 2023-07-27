"use client"

import Image from 'next/image'
import Link from 'next/link'
import styles from './sidebar.module.scss'
import notesStyles from '../notes/notes.module.scss'

const Sidebar = () => {
  const hideSidebar = () => {
    const sidebar = document.querySelector<HTMLElement>(`.${styles.sidebar}`)
    const noNotesContainer = document.querySelector<HTMLElement>(`.${notesStyles.noNotesContainer}`)
    const mainNotesContainer = document.querySelector<HTMLElement>(`.${notesStyles.mainNotesContainer}`)
    const arrowOpenBtn = document.querySelector<HTMLElement>(`.${notesStyles.arrowOpenBtn}`)

    if (sidebar) {
      sidebar.classList.add(styles.hide)
      sidebar.classList.remove(styles.open)

      // After 300ms, hide element from DOM so content shifts to fit width of screen
      setTimeout(() => {
        sidebar.style.display = 'none'

        if (noNotesContainer) {
          noNotesContainer.style.width = '100vw'
        }

        if (mainNotesContainer) {
          mainNotesContainer.style.width = '100vw'
        }

        if (arrowOpenBtn) {
          arrowOpenBtn.style.display = 'block'
        }
      }, 300)
    }
  }

  return (
    <div className={styles.sidebar} role="navigation">
      <button className={styles.arrowBtn} onClick={hideSidebar}>
        <Image
          className={styles.arrowImg}
          src={"/assets/sidebar/arrow-icon.svg"}
          width={36}
          height={48}
          alt="Toggle sidebar"
        />
      </button>
      <div className={styles.logo}>
        <Image
          src="/assets/logo.png"
          width={39}
          height={39}
          alt="logo"
        />
        <h1>NoteDown</h1>
      </div>
      <div className={styles.btnContainer}>
        <Link href='/notes/create' className={styles.newNoteBtn}>
          <Image
            src={"/assets/plus.svg"}
            width={18}
            height={18}
            alt=""
          />New Note</Link>
        <Link href="#">
          <Image
            src={"/assets/sidebar/notes-icon.svg"}
            width={32}
            height={32}
            alt=""
          />
          Notes</Link>
        <Link href="#">
          <Image
            src={"/assets/sidebar/help-icon.svg"}
            width={32}
            height={32}
            alt=""
          />
          Help</Link>
        <div className={styles.userContainer}>
          <div>
            <Image
              src={"/assets/placeholders/profile-placeholder.png"}
              width={32}
              height={32}
              alt="Profile image"
            />
            <p>Name</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar