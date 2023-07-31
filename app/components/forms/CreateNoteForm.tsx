"use client"

import styles from '@/app/notes/create/create.module.scss'
import { useState, FormEvent } from 'react'

interface Props {
  onSubmit: (title: string, note: string, tag: string) => void
}

const CreateNoteForm = ({ onSubmit }: Props) => {
  const [title, setTitle] = useState<string>('')
  const [note, setNote] = useState<string>('')
  const [tag, setTag] = useState<string>('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit(title, note, tag)
    console.log(tag)

    setTitle('')
    setNote('')
    setTag('')
  }

  return (
    <form data-testid="form" className={styles.createForm} onSubmit={(e) => handleSubmit(e)}>
      <div className={styles.topHalf}>
        <input
          type="text"
          name='title'
          placeholder='Title'
          value={title}
          required
          onChange={((e) => setTitle(e.target.value))} />
        <select
          name="tag"
          id="tag"
          value={tag}
          onChange={(e) => setTag(e.target.value)} >
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
        value={note}
        onChange={((e) => setNote(e.target.value))}>
      </textarea>
      <button>Create</button>
    </form>
  )
}

export default CreateNoteForm