import styles from '@/app/notes/notes.module.scss'
import Image from 'next/image'
import { format } from 'date-fns'
import { Dispatch, SetStateAction, useState } from 'react'
import { updateFavourite, deleteNote } from '@/app/utils/api/mongoApi'
import { INote } from '@/app/notes/page'

interface Props {
  _id: string,
  title: string,
  tag: string,
  favourite: boolean,
  updatedAt: Date,
  notes: INote[],
  setNotes: Dispatch<SetStateAction<INote[]>>
}

const NoteCard = ({ _id, title, tag, favourite, updatedAt, notes, setNotes }: Props) => {
  const [fav, setFav] = useState<boolean>(favourite)
  const [showDropdown, setShowDropdown] = useState<boolean>(false)

  const handleFavourite = () => {
    setFav(!fav)
    updateFavourite(_id, !fav)
  }

  const handleDeleteNote = () => {
    deleteNote(_id)
    setNotes(notes.filter(note => note._id !== _id))
    setShowDropdown(false)
  }

  return (
    <div className={styles.noteCardContainer} style={tag ? { background: `${tag}` } : { background: "#ffffff" }}>
      <h3>{title}</h3>
      {fav ?
        <button className={styles.star} onClick={handleFavourite}>
          <Image
            src={"/assets/filled-star.svg"}
            width={32}
            height={32}
            alt="Favourite note"
          />
        </button>
        :
        <button className={styles.star} onClick={handleFavourite}>
          <Image
            src={"/assets/unfilled-star.svg"}
            width={32}
            height={32}
            alt="Unfavourite note"
          />
        </button>
      }
      <button className={styles.moreBtn} onClick={() => setShowDropdown(!showDropdown)}>
        <Image
          src={"/assets/more-icon.svg"}
          width={32}
          height={32}
          alt="More options"
        />
      </button>
      {updatedAt &&
        <p className={styles.lastEdited}>{`Last edited: ${format(new Date(updatedAt), 'PPP')}`}</p>
      }
      {showDropdown &&
        <div className={styles.dropdownContainer}>
          <div className={styles.btnContainer}>
            <Image
              src={"/assets/edit.svg"}
              width={32}
              height={32}
              alt="Edit note"
            />
            <button>Edit</button>
          </div>
          <div className={styles.btnContainer} onClick={handleDeleteNote}>
            <Image
              src={"/assets/delete.svg"}
              width={32}
              height={32}
              alt="Delete note"
            />
            <button>Delete</button>
          </div>
          <div className={styles.dropdownBg} onClick={() => setShowDropdown(false)}></div>
        </div>
      }
    </div>
  )
}

export default NoteCard