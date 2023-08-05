"use client"

import { useState, useContext } from 'react'
import styles from './create.module.scss'
import { createNote } from '@/app/utils/api/mongoApi'
import CreateNoteForm from '@/app/components/forms/CreateNoteForm'
import Preview from '@/app/components/preview/Preview'
import { UserContext } from '@/app/components/context/UserContext'

const CreateNote = () => {
  const [title, setTitle] = useState<string>('')
  const [note, setNote] = useState<string>('')
  const [tag, setTag] = useState<string>('')
  const [preview, setPreview] = useState<boolean>(false)
  const { user } = useContext(UserContext);

  const onSubmit = (title: string, note: string, tag: string) => {
    createNote(user.sub, title, note, tag, false)
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