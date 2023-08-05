import { INote } from "@/app/notes/page"
import { Dispatch, FormEvent, SetStateAction, useEffect, useState } from "react"
import { format } from 'date-fns'
import styles from './form.module.scss'

interface Props {
  onSubmit: (title: string, note: string, tag: string) => void,
  noteToEdit: INote,
  preview: boolean,
  setPreview: Dispatch<SetStateAction<boolean>>
}

const EditNoteForm = ({ onSubmit, noteToEdit, preview, setPreview }: Props) => {
  const [newTitle, setNewTitle] = useState<string>('')
  const [newNote, setNewNote] = useState<string>('')
  const [newTag, setNewTag] = useState<string>('')

  useEffect(() => {
    if (noteToEdit) {
      setNewTitle(noteToEdit.title)
      setNewNote(noteToEdit.note)
      setNewTag(noteToEdit.tag)
    }
  }, [noteToEdit])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit(newTitle, newNote, newTag)
  }

  return (
    <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
      <div className={styles.topHalf}>
        <input
          type="text"
          name='title'
          placeholder='Title'
          value={newTitle}
          required
          onChange={((e) => setNewTitle(e.target.value))} />
        <select
          name="tag"
          id="tag"
          value={newTag}
          onChange={(e) => setNewTag(e.target.value)} >
          <option value="#ffffff">None</option>
          <option value="#e2ebe0">Green</option>
          <option value="#ffeccb">Yellow</option>
          <option value="#cddaef">Blue</option>
          <option value="#fec8cc">Red</option>
          <option value="#ddd3e1">Purple</option>
        </select>
      </div>
      <textarea
        name="note"
        placeholder='Start writing your note here!'
        value={newNote}
        onChange={((e) => setNewNote(e.target.value))}>
      </textarea>
      <p className={styles.date}>{`Created on: ${format(new Date(noteToEdit.createdAt), 'PPP')}`}</p>
      <div className={styles.btnContainer}>
        <button className={styles.primaryBtn}>Edit</button>
        <button
          type='button'
          className={styles.previewBtn}
          onClick={() => setPreview(!preview)}
        >
          Preview
        </button>
      </div>
    </form>
  )
}

export default EditNoteForm