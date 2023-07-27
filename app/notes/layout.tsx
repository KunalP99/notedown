"use client"

import { ReactNode } from "react"
import Image from "next/image"
import '../global.scss'
import { useEffect, useState } from "react"
import styles from '../notes/notes.module.scss'
import openSidebar from "../utils/openSidebar"
import Sidebar from "../sidebar/sidebar"

const NotesLayout = ({ children }: { children: ReactNode }) => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  // Get the size of the window when the window changes size
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth)
    };

    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  })

  // Change width of containers based on the width of the window
  useEffect(() => {
    const mainNotesContainer = document.querySelector<HTMLElement>(`.${styles.mainNotesContainer}`)
    const noNotesContainer = document.querySelector<HTMLElement>(`.${styles.noNotesContainer}`)

    if (mainNotesContainer) {
      if (windowWidth >= 800 && windowWidth < 1200) mainNotesContainer.style.width = '50vw'
      if (windowWidth >= 1200 && windowWidth < 1700) mainNotesContainer.style.width = '70vw'
      if (windowWidth >= 1700) mainNotesContainer.style.width = '80vw'
    }

    if (noNotesContainer) {
      if (windowWidth >= 800 && windowWidth < 1200) noNotesContainer.style.width = '50vw'
      if (windowWidth >= 1200 && windowWidth < 1700) noNotesContainer.style.width = '70vw'
      if (windowWidth >= 1700) noNotesContainer.style.width = '80vw'
    }
  }, [windowWidth])

  return (
    <div className="container">
      <button className={styles.arrowOpenBtn} onClick={() => openSidebar(windowWidth)}>
        <Image
          className={styles.arrowImg}
          src={"/assets/sidebar/arrow-icon.svg"}
          width={36}
          height={48}
          alt="Toggle sidebar"
        />
      </button>
      <Sidebar />
      {children}
    </div>
  )
}

export default NotesLayout