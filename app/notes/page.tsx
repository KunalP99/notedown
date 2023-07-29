"use client"

import styles from './notes.module.scss'
import { useState, useEffect } from 'react'
import { getNotes } from '../utils/api/mongoApi'
import NotesContainer from '../components/notes/NotesContainer'

export interface INote {
  user_id: string,
  note_id: string,
  title: string,
  note: string,
  tag: string,
  favourite: boolean
}

const Notes = () => {
  const [notes, setNotes] = useState<INote[]>([])
  const [err, setErr] = useState<string>('')

  useEffect(() => {
    getNotes()
      .then(data => setNotes(data.notes))
      .catch(err => setErr(err))
  }, [])


  return (
    <section className={styles.notesContainer}>
      <h2>My Notes</h2>
      <NotesContainer notes={notes} err={err} />
    </section >
  )
}

export default Notes

