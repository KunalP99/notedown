"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useContext } from 'react'
import styles from './sidebar.module.scss'
import hideSidebar from '../utils/hideSidebar'
import LoginButton from '../utils/google/LoginButton'
import { UserContext } from '../components/context/UserContext'

const Sidebar = () => {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const { user, setUser } = useContext(UserContext);

  // Get the size of the window when the window changes size
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth)
    };

    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [windowWidth])

  // Get initial window width and set it 
  useEffect(() => {
    setWindowWidth(window.innerWidth)
  }, [])

  // Get local storage item data when component mounts if there is data
  useEffect(() => {
    const data = window.localStorage.getItem('NOTEDOWN_USER');
    if (data !== null) {
      setUser(JSON.parse(data));
    }
  }, []);

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
        <Link href='/notes/create' className={styles.newNoteBtn} onClick={() => {
          if (windowWidth < 800) {
            hideSidebar()
          }
        }}>
          <Image
            src={"/assets/plus.svg"}
            width={18}
            height={18}
            alt=""
          />New Note</Link>
        <Link href="/notes" onClick={() => {
          if (windowWidth < 800) {
            hideSidebar()
          }
        }}>
          <Image
            src={"/assets/sidebar/notes-icon.svg"}
            width={32}
            height={32}
            alt=""
          />
          Notes</Link>
        <Link href="#" onClick={() => {
          if (windowWidth < 800) {
            hideSidebar()
          }
        }}>
          <Image
            src={"/assets/sidebar/help-icon.svg"}
            width={32}
            height={32}
            alt=""
          />
          Help</Link>
        <div className={styles.userContainer}>
          {user.sub === '' ?
            <LoginButton />
            :
            <div>
              <Image
                src={user.picture}
                width={32}
                height={32}
                alt="Profile image"
              />
              <p>{user.given_name}</p>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Sidebar