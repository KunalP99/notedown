"use client"

import { ReactNode } from "react"
import Image from "next/image"
import '../global.scss'
import { useEffect, useState } from "react"
import UserProvider from "../components/context/UserContext"
import { GoogleOAuthProvider } from "@react-oauth/google"
import notesStyles from '../notes/notes.module.scss'
import formStyles from '../components/forms/form.module.scss'
import sidebarStyles from '../sidebar/sidebar.module.scss'
import noteStyles from '../notes/[noteId]/note.module.scss'
import previewStyles from '../components/preview/preview.module.scss'
import openSidebar from "../utils/openSidebar"
import Sidebar from "../sidebar/sidebar"

const NotesLayout = ({ children }: { children: ReactNode }) => {
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
    const mainNotesContainer = document.querySelector<HTMLElement>(`.${notesStyles.mainNotesContainer}`)
    const noNotesContainer = document.querySelector<HTMLElement>(`.${notesStyles.noNotesContainer}`)
    const form = document.querySelector<HTMLElement>(`.${formStyles.form}`)
    const sidebar = document.querySelector<HTMLElement>(`.${sidebarStyles.sidebar}`)
    const noteContainer = document.querySelector<HTMLElement>(`.${noteStyles.noteContainer}`)
    const previewContainer = document.querySelector<HTMLElement>(`.${previewStyles.previewContainer}`)

    if (sidebar) {
      if (sidebar.classList.contains(`${sidebarStyles.open}`)) {
        if (mainNotesContainer) {
          if (windowWidth >= 800 && windowWidth < 1000) mainNotesContainer.style.width = '55vw'
          if (windowWidth >= 1000 && windowWidth < 1200) mainNotesContainer.style.width = '60vw'
          if (windowWidth >= 1200 && windowWidth < 1700) mainNotesContainer.style.width = '70vw'
          if (windowWidth >= 1700) mainNotesContainer.style.width = '80vw'
        }

        if (noNotesContainer) {
          if (windowWidth >= 800 && windowWidth < 1000) noNotesContainer.style.width = '55vw'
          if (windowWidth >= 1000 && windowWidth < 1200) noNotesContainer.style.width = '60vw'
          if (windowWidth >= 1200 && windowWidth < 1700) noNotesContainer.style.width = '70vw'
          if (windowWidth >= 1700) noNotesContainer.style.width = '80vw'
        }

        if (form) {
          if (windowWidth >= 800 && windowWidth < 1000) form.style.width = '55vw'
          if (windowWidth >= 1000 && windowWidth < 1200) form.style.width = '60vw'
          if (windowWidth >= 1200 && windowWidth < 1700) form.style.width = '70vw'
          if (windowWidth >= 1700) form.style.width = '80vw'
        }

        if (noteContainer) {
          if (windowWidth >= 800 && windowWidth < 1000) noteContainer.style.width = '55vw'
          if (windowWidth >= 1000 && windowWidth < 1200) noteContainer.style.width = '60vw'
          if (windowWidth >= 1200 && windowWidth < 1700) noteContainer.style.width = '70vw'
          if (windowWidth >= 1700) noteContainer.style.width = '80vw'
        }

        if (previewContainer) {
          if (windowWidth >= 800 && windowWidth < 1000) previewContainer.style.width = '55vw'
          if (windowWidth >= 1000 && windowWidth < 1200) previewContainer.style.width = '60vw'
          if (windowWidth >= 1200 && windowWidth < 1700) previewContainer.style.width = '70vw'
          if (windowWidth >= 1700) previewContainer.style.width = '80vw'
        }
      }
    }

  }, [windowWidth])

  return (
    <>
      <GoogleOAuthProvider clientId={`${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}`}>
        <UserProvider>
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
        </UserProvider>
      </GoogleOAuthProvider>


    </>

  )
}

export default NotesLayout