"use client"

import styles from './notes.module.scss'
import { useState, useEffect, useContext } from 'react'
import { getNotes } from '../utils/api/mongoApi'
import NotesContainer from '../components/notes/NotesContainer'
import { UserContext } from '../components/context/UserContext'

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
  const { user } = useContext(UserContext);

  // Get notes if user is logged in else set notes array to empty
  useEffect(() => {
    if (user.sub !== '') {
      getNotes(user.sub)
        .then(data => setNotes(data.notes))
        .catch(err => setErr(err))
    } else {
      setNotes([])
    }
  }, [onFav, user])

  return (
    <section className={styles.notesContainer}>
      <h2>My Notes</h2>
      <NotesContainer
        notes={notes}
        setNotes={setNotes}
        onFav={onFav}
        setOnFav={setOnFav}
        err={err} />
    </section >
  )
}

export default Notes

