"use client"

import { useState, useEffect } from 'react'
import { getOneNote } from '@/app/utils/api/mongoApi'
import { format } from 'date-fns'
import { INote } from '../page'
import styles from './note.module.scss'

const Note = ({ params }: { params: { noteId: string } }) => {
  const [note, setNote] = useState<INote>()
  const [err, setErr] = useState<string>('')

  useEffect(() => {
    getOneNote(params.noteId)
      .then(data => setNote(data.note))
      .catch(err => setErr(err))
  }, [params.noteId])

  return (
    <div className={styles.noteContainer}>
      {note &&
        <>
          <div className={styles.headingContainer}>
            <div className={styles.titleContainer}>
              <h2>{note.title}</h2>
              <p className={styles.date}>{`Created on: ${format(new Date(note.createdAt), 'PPP')}`}</p>
            </div>
            <div className={styles.underline} style={{ backgroundColor: note.tag }}></div>
          </div>
          <p className={styles.text}>{note.note}</p>
        </>
      }
      {err && <p>There has been an error!</p>}
    </div>
  )
}

export default Note