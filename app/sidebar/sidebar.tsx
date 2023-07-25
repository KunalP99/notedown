"use client"

import Image from "next/image"
import Link from "next/link"
import styles from './sidebar.module.scss'

const Sidebar = () => {
  // // Toggle navbar and change hamburger icon to xIcon and vice versa
  // const toggleNav = () => {
  //   // Change hamburger menu to x icon and vice versa
  //   if (navIcon !== HamburgerMenu) {
  //     setNavIcon(HamburgerMenu);
  //   } else {
  //     setNavIcon(xIcon);
  //   }

  //   const navbarLinks = document.querySelector('.navbar-links');
  //   navbarLinks.classList.toggle('active');
  // };

  const toggleSidebar = () => {
    const sidebar = document.querySelector(`.${styles.sidebar}`)
    sidebar?.classList.toggle(styles.hide)
  }

  return (
    <div className={styles.sidebar} role="navigation">
      <button className={styles.arrowBtn} onClick={toggleSidebar}>
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
        <Link href='#' className={styles.newNoteBtn}>
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