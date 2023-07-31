import styles from '@/app/notes/notes.module.scss'
import Image from 'next/image'
import { format } from 'date-fns'

interface Props {
  _id: string,
  title: string,
  tag: string,
  favourite: boolean,
  updatedAt: Date
}

const NoteCard = ({ _id, title, tag, favourite, updatedAt }: Props) => {
  return (
    <div className={styles.noteCardContainer} style={tag ? { background: `${tag}` } : { background: "#ffffff" }}>
      {favourite ?
        <button className={styles.star}>
          <Image
            src={"/assets/filled-star.svg"}
            width={32}
            height={32}
            alt="Favourite note"
          />
        </button>
        :
        <button className={styles.star}>
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