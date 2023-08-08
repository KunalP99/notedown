"use client"

import { ReactNode } from "react"
import Image from "next/image"
import '../global.scss'
import { useEffect, useState } from "react"
import helpStyles from '../help/help.module.scss'
import notesStyles from '../notes/notes.module.scss'
import sidebarStyles from '../sidebar/sidebar.module.scss'
import openSidebar from "../utils/openSidebar"
import Sidebar from "../sidebar/Sidebar"

const HelpLayout = ({ children }: { children: ReactNode }) => {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  // Get the size of the window when the window changes size
  useEffect(() => {
    const sidebar = document.querySelector<HTMLElement>(`.${sidebarStyles.sidebar}`)

    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth)
    };

    // Only add resize event if sidebar is open, else we just want main containers to have 100vw
    if (sidebar) {
      if (!sidebar.classList.contains(sidebarStyles.open)) {
        window.addEventListener('resize', handleWindowResize)

        return () => {
          window.removeEventListener('resize', handleWindowResize)
        }
      }
    }
  }, [])

  // Get initial window width and set it 
  useEffect(() => {
    setWindowWidth(window.innerWidth)
  }, [])

  // Change width of containers based on the width of the window
  useEffect(() => {
    const helpContainer = document.querySelector<HTMLElement>(`.${helpStyles.helpContainer}`)
    const sidebar = document.querySelector<HTMLElement>(`.${sidebarStyles.sidebar}`)

    if (sidebar) {
      if (sidebar.classList.contains(`${sidebarStyles.open}`)) {
        if (helpContainer) {
          if (windowWidth >= 800 && windowWidth < 1000) helpContainer.style.width = '55vw'
          if (windowWidth >= 1000 && windowWidth < 1200) helpContainer.style.width = '60vw'
          if (windowWidth >= 1200 && windowWidth < 1700) helpContainer.style.width = '70vw'
          if (windowWidth >= 1700) helpContainer.style.width = '80vw'
        }
      }
    }

  }, [windowWidth])

  return (
    <div className="container">
      <button className={notesStyles.arrowOpenBtn} onClick={() => openSidebar(windowWidth)}>
        <Image
          className={notesStyles.arrowImg}
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

export default HelpLayout