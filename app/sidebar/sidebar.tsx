import Image from "next/image"
import Link from "next/link"
import styles from './sidebar.module.scss'

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
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
            src={'/assets/sidebar/notes-icon.svg'}
            width={32}
            height={32}
            alt=""
          />
          Notes</Link>
        <Link href="#">
          <Image
            src={'/assets/sidebar/help-icon.svg'}
            width={32}
            height={32}
            alt=""
          />
          Help</Link>
      </div>
    </div>
  )
}

export default Sidebar