"use client"

import { useState } from 'react'
import styles from './create.module.scss'

const CreateNote = () => {
  const [title, setTitle] = useState<string>('')
  const [note, setNote] = useState<string>('')
  const [tag, setTag] = useState<string>('')
  
  return (
    <section className={styles.createContainer}>
      <h2>Create Note</h2>
      <form className={styles.createForm}>
        <div className={styles.topHalf}>
          <input type="text" name='title' placeholder='Title' required />
          <select name="tag" id="tag">
            <option value="none">None</option>
            <option value="#e2ebe0">Green</option>
            <option value="#ffeccb">Yellow</option>
            <option value="#cddaef">Blue</option>
            <option value="#fec8cc">Red</option>
            <option value="#ddd3e1">Purple</option>
          </select>
        </div>
        <textarea name="note" cols={20} rows={10} placeholder='Start writing your note here!'></textarea>
        <button>Create</button>
      </form>
    </section>
  )
}

export default CreateNote