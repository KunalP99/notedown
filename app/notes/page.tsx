"use client"

import styles from './notes.module.scss'
import { useState, useEffect } from 'react'
import { getNotes } from '../utils/api/mongoApi'
import NotesContainer from '../components/notes/NotesContainer'

export interface INote {
  _id: string
  user_id: string,
  title: string,
  note: string,
  tag: string,
  favourite: boolean,
  createdAt: Date,
  updatedAt: Date
}

const Notes = () => {
  const [notes, setNotes] = useState<INote[]>([])
  const [onFav, setOnFav] = useState<boolean>(false)
  const [err, setErr] = useState<string>('')

  useEffect(() => {
    getNotes()
      .then(data => setNotes(data.notes))
      .catch(err => setErr(err))
  }, [onFav])


  return (
    <section className={styles.notesContainer}>
      <h2>My Notes</h2>
      <NotesContainer notes={notes} onFav={onFav} setOnFav={setOnFav} err={err} />
    </section >
  )
}

export default Notes

