import Image from 'next/image'
import styles from './notes.module.scss'

const Notes = () => {
  return (
    <section className={styles.notesContainer}>
      <h2>My Notes</h2>
      <div className={styles.noNotesContainer}>
        <Image
          src={"/assets/empty-notes-img.svg"}
          width={250}
          height={130}
          alt="No notes"
        />
        <p>You have not created any notes...</p>
      </div>

    </section>
  )
}

export default Notes