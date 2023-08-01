"use client"

import Image from 'next/image'
import { Dispatch, MouseEvent, SetStateAction, useEffect, useState } from 'react'
import styles from '@/app/notes/notes.module.scss'
import NoteCard from './NoteCard'
import { INote } from '@/app/notes/page'

interface Props {
  notes: INote[],
  onFav: boolean,
  setOnFav: Dispatch<SetStateAction<boolean>>
  err: string
}

const NotesContainer = ({ notes, onFav, setOnFav, err }: Props) => {
  const [favNotes, setFavNotes] = useState<INote[]>()

  // Filter notes everytime notes array is changed to update UI straight aways
  useEffect(() => {
    const filteredNotes = notes.filter(note => note.favourite)
    setFavNotes(filteredNotes)
  }, [notes])

  // Change active state between recents filter and favourites filter
  const toggleFilter = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    const activeUnderline = document.querySelector<HTMLElement>(`.${styles.activeUnderline}`)

    if (activeUnderline) {
      if (e.currentTarget.innerText === 'Recents') {
        setOnFav(false)
        activeUnderline.classList.add(styles.moveLeft)
        activeUnderline.classList.remove(styles.moveRight)
      } else if (e.currentTarget.innerText === 'Favourites') {
        setOnFav(true)
        activeUnderline.classList.add(styles.moveRight)
        activeUnderline.classList.remove(styles.moveLeft)
      }
    }
  }

  return (
    <>
      {notes && notes.length <= 0 ?
        <div className={styles.noNotesContainer}>
          <Image
            src={"/assets/empty-notes-img.svg"}
            width={250}
            height={130}
            alt="No notes"
          />
          <p>{`You have not created any notes...`}</p>
        </div>
        :
        <div className={styles.mainNotesContainer}>
          <div className={styles.filterContainer}>
            <div>
              <div className={styles.recentContainer}>
                <button className={styles.recentsBtn} onClick={(e) => toggleFilter(e)}>Recents</button>
              </div>
              <div className={styles.favContainer}>
                <button className={styles.favBtn} onClick={(e) => toggleFilter(e)}>Favourites</button>
              </div>
              <div className={styles.activeUnderline}></div>
            </div>
            <div className={styles.underline}></div>
          </div>
          <div className={styles.searchBoxContainer}>
            <input className={styles.searchBox} type="text" name="search-notes" placeholder="Search..." />
          </div>
          <div className={styles.gridContainer}>
            {onFav ?
              <>
                {favNotes?.map(note =>
                  <NoteCard
                    key={`${note._id.toString()}`}
                    _id={note._id.toString()}
                    title={note.title}
                    tag={note.tag}
                    favourite={note.favourite}
                    updatedAt={note.updatedAt}
                  />)}
              </>
              :
              <>
                {notes.map(note =>
                  <NoteCard
                    key={`${note._id.toString()}`}
                    _id={note._id.toString()}
                    title={note.title}
                    tag={note.tag}
                    favourite={note.favourite}
                    updatedAt={note.updatedAt}
                  />)}
              </>
            }
          </div>
        </div>
      }
    </>
  )
}

export default NotesContainer