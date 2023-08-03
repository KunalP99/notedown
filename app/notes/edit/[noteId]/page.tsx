"use client"

import EditNoteForm from '@/app/components/forms/EditNoteForm'
import { useEffect, useState } from 'react'
import { INote } from '../../page'
import styles from './edit.module.scss'
import { getOneNote, updateNote } from '@/app/utils/api/mongoApi'

const EditNote = ({ params }: { params: { noteId: string } }) => {
  const [noteToEdit, setNoteToEdit] = useState<INote>()
  const [err, setErr] = useState<string>('')

  useEffect(() => {
    getOneNote(params.noteId)
      .then(data => setNoteToEdit(data.note))
      .catch(err => setErr(err))
  }, [params.noteId])

  const onSubmit = (title: string, note: string, tag: string) => {
    updateNote(params.noteId, title, note, tag)
  }

  return (
    <section className={styles.editContainer}>
      <h2>Edit Note</h2>
      {noteToEdit &&
        <EditNoteForm onSubmit={onSubmit} noteToEdit={noteToEdit} />
      }
      {err && <p>There has been an error!</p>}
    </section>
  )
}

export default EditNote