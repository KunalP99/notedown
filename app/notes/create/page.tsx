"use client"

import { useState } from 'react'
import styles from './create.module.scss'
import { createNote } from '@/app/utils/api/mongoApi'
import CreateNoteForm from '@/app/components/forms/CreateNoteForm'
import Preview from '@/app/components/preview/Preview'

const CreateNote = () => {
  const [title, setTitle] = useState<string>('')
  const [note, setNote] = useState<string>('')
  const [tag, setTag] = useState<string>('')
  const [preview, setPreview] = useState<boolean>(false)

  const onSubmit = (title: string, note: string, tag: string) => {
    createNote('1', title, note, tag, false)
  }

  return (
    <section className={styles.createContainer}>
      <h2 className={styles.heading}>Create Note</h2>
      {preview ?
        <Preview
          setPreview={setPreview}
          title={title}
          note={note}
          tag={tag}
        />
        :
        <CreateNoteForm
          title={title}
          setTitle={setTitle}
          note={note}
          setNote={setNote}
          tag={tag}
          setTag={setTag}
          onSubmit={onSubmit}
          preview={preview}
          setPreview={setPreview}
        />
      }

    </section>
  )
}

export default CreateNote