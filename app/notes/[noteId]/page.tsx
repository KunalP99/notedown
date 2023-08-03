"use client"

import { useState, useEffect } from 'react'
import { getOneNote } from '@/app/utils/api/mongoApi'
import { INote } from '../page'
import styles from './note.module.scss'

const Note = ({ params }: { params: { noteId: string } }) => {
  const [note, setNote] = useState<INote>()
  const [err, setErr] = useState<string>('')

  useEffect(() => {
    getOneNote(params.noteId)
      .then(data => setNote(data.note))
      .catch(err => setErr(err))
  }, [])

  console.log(note?.tag)


  return (
    <div className={styles.noteContainer}>
      {note &&
        <>
          <div className={styles.headingContainer}>
            <h2>{note.title}</h2>
            <div className={styles.underline} style={{ backgroundColor: note.tag }}></div>
          </div>
          <p className={styles.text}>{note.note}</p>
        </>
      }
    </div>
  )
}

export default Note