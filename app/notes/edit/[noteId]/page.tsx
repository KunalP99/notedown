"use client"

import { useEffect, useState } from 'react'
import { INote } from '../../page'
import styles from './edit.module.scss'
import { getOneNote, updateNote } from '@/app/utils/api/mongoApi'
import EditNoteForm from '@/app/components/forms/EditNoteForm'
import Preview from '@/app/components/preview/Preview'

const EditNote = ({ params }: { params: { noteId: string } }) => {
  const [noteToEdit, setNoteToEdit] = useState<INote>()
  const [preview, setPreview] = useState<boolean>(false)
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
      <h2 className={styles.heading}>Edit Note</h2>
      {noteToEdit &&
        <>
          {preview ?
            <Preview
              setPreview={setPreview}
              title={noteToEdit.title}
              note={noteToEdit.note}
              tag={noteToEdit.tag} />
            :
            <EditNoteForm
              onSubmit={onSubmit}
              noteToEdit={noteToEdit}
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