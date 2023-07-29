"use client"

import { FormEvent, useState } from 'react'
import styles from './create.module.scss'
import { createNote } from '@/app/utils/api/mongoApi'

const CreateNote = () => {
  const [title, setTitle] = useState<string>('')
  const [note, setNote] = useState<string>('')
  const [tag, setTag] = useState<string>('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    createNote('1', title, note, tag)

    setTitle('')
    setNote('')
    setTag('')
  }

  return (
    <section className={styles.createContainer}>
      <h2>Create Note</h2>
      <form className={styles.createForm} onSubmit={(e) => handleSubmit(e)}>
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
            <option value="none">None</option>
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
    </section>
  )
}

export default CreateNote