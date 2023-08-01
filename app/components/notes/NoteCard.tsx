import styles from '@/app/notes/notes.module.scss'
import Image from 'next/image'
import { format } from 'date-fns'
import { useState } from 'react'
import { updateFavourite } from '@/app/utils/api/mongoApi'

interface Props {
  _id: string,
  title: string,
  tag: string,
  favourite: boolean,
  updatedAt: Date,
}

const NoteCard = ({ _id, title, tag, favourite, updatedAt }: Props) => {
  const [fav, setFav] = useState(favourite)

  const handleFavourite = () => {
    setFav(!fav)
    updateFavourite(_id, !fav)
  }

  return (
    <div className={styles.noteCardContainer} style={tag ? { background: `${tag}` } : { background: "#ffffff" }}>
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
      <button className={styles.moreBtn}>
        <Image
          src={"/assets/more-icon.svg"}
          width={32}
          height={32}
          alt="More options"
        />
      </button>

      <h3>{title}</h3>
      {updatedAt &&
        <p className={styles.lastEdited}>{`Last edited: ${format(new Date(updatedAt), 'PPP')}`}</p>
      }
    </div>
  )
}

export default NoteCard