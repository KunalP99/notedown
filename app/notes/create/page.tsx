"use client"

import styles from './create.module.scss'
import { createNote } from '@/app/utils/api/mongoApi'
import CreateNoteForm from '@/app/components/forms/CreateNoteForm'

const CreateNote = () => {
  const onSubmit = (title: string, note: string, tag: string) => {
    createNote('1', title, note, tag, false)
  }

  return (
    <section className={styles.createContainer}>
      <h2>Create Note</h2>
      <CreateNoteForm onSubmit={onSubmit} />
    </section>
  )
}

export default CreateNote