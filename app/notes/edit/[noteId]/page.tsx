"use client"

import { useEffect, useState } from 'react'
import { INote } from '../../page'
import styles from './edit.module.scss'
import { getOneNote, updateNote } from '@/app/utils/api/mongoApi'
import EditNoteForm from '@/app/components/forms/EditNoteForm'
import Preview from '@/app/components/preview/Preview'

const EditNote = ({ params }: { params: { noteId: string } }) => {
  const [noteToEdit, setNoteToEdit] = useState<INote>()
  const [newTitle, setNewTitle] = useState<string>('')
  const [newNote, setNewNote] = useState<string>('')
  const [newTag, setNewTag] = useState<string>('')
  const [preview, setPreview] = useState<boolean>(false)
  const [err, setErr] = useState<string>('')

  useEffect(() => {
    getOneNote(params.noteId)
      .then(data => setNoteToEdit(data.note))
      .catch(err => setErr(err))
  }, [params.noteId])

  // Get original values from the note
  useEffect(() => {
    if (noteToEdit) {
      setNewTitle(noteToEdit.title)
      setNewNote(noteToEdit.note)
      setNewTag(noteToEdit.tag)
      console.log(noteToEdit.title)
    }
  }, [noteToEdit])

  const onSubmit = (title: string, note: string, tag: string) => {
    updateNote(params.noteId, title, note, tag)
  }

  return (
    <section className={styles.editContainer}>
      <h2 className={styles.heading}>Edit Note</h2>
      {noteToEdit &&
        <>
          {preview ?
            <Preview
              setPreview={setPreview}
              title={newTitle}
              note={newNote}
              tag={newTag} />
            :
            <EditNoteForm
              newTitle={newTitle}
              setNewTitle={setNewTitle}
              newNote={newNote}
              setNewNote={setNewNote}
              newTag={newTag}
              setNewTag={setNewTag}
              createdAt={noteToEdit.createdAt}
              onSubmit={onSubmit}
              preview={preview}
              setPreview={setPreview}
            />
          }
        </>
      }
      {err && <p>There has been an error!</p>}
    </section>
  )
}

export default EditNote