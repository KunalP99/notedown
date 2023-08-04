"use client"

import Preview from '../preview/Preview'
import styles from './form.module.scss'
import { useState, FormEvent, SetStateAction, Dispatch } from 'react'

interface Props {
  onSubmit: (title: string, note: string, tag: string) => void,
  preview: boolean,
  setPreview: Dispatch<SetStateAction<boolean>>
}

const CreateNoteForm = ({ onSubmit, preview, setPreview }: Props) => {
  const [title, setTitle] = useState<string>('')
  const [note, setNote] = useState<string>('')
  const [tag, setTag] = useState<string>('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (tag === '') {
      onSubmit(title, note, '#ffffff')
    } else {
      onSubmit(title, note, tag)
    }

    setTitle('')
    setNote('')
    setTag('')
  }

  return (
    <div className={styles.formContainer}>
      {preview ?
        <Preview
          title={title}
          note={note}
          tag={tag}
          setPreview={setPreview}
        />
        :
        <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
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
          <div className={styles.btnContainer}>
            <button className={styles.primaryBtn}>Create</button>
            <button
              type='button'
              className={styles.previewBtn}
              onClick={() => setPreview(!preview)}
            >
              Preview
            </button>
          </div>
        </form>
      }
    </div>
  )
}

export default CreateNoteForm