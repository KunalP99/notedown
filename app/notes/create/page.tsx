"use client"

import { useState } from 'react'
import styles from './create.module.scss'
import { createNote } from '@/app/utils/api/mongoApi'
import CreateNoteForm from '@/app/components/forms/CreateNoteForm'

const CreateNote = () => {
  const [preview, setPreview] = useState<boolean>(false)

  const onSubmit = (title: string, note: string, tag: string) => {
    createNote('1', title, note, tag, false)
  }

  return (
    <section className={styles.createContainer}>
      <h2 className={styles.heading}>Create Note</h2>
      <CreateNoteForm
        onSubmit={onSubmit}
        preview={preview}
        setPreview={setPreview}
      />
    </section>
  )
}

export default CreateNote