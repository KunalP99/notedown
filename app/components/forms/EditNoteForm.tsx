import { Dispatch, FormEvent, SetStateAction } from "react"
import { format } from 'date-fns'
import styles from './form.module.scss'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Props {
  newTitle: string,
  setNewTitle: Dispatch<SetStateAction<string>>
  newNote: string,
  setNewNote: Dispatch<SetStateAction<string>>
  newTag: string,
  setNewTag: Dispatch<SetStateAction<string>>
  createdAt: Date
  onSubmit: (title: string, note: string, tag: string) => void,
  preview: boolean,
  setPreview: Dispatch<SetStateAction<boolean>>
}

const EditNoteForm = ({ newTitle, setNewTitle, newNote, setNewNote, newTag, setNewTag, createdAt, onSubmit, preview, setPreview }: Props) => {
  const notify = () => toast.success("Note successfully changed!");
  const notifyErr = () => toast.error("Note could not be created!");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      onSubmit(newTitle, newNote, newTag)
      notify()
    } catch (err) {
      notifyErr()
    }
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
      <p className={styles.date}>{`Created on: ${format(new Date(createdAt), 'PPP')}`}</p>
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
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
        theme="light"
      />
    </form>
  )
}

export default EditNoteForm