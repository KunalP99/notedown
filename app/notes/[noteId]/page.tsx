"use client"

import { useState, useEffect } from 'react'
import { getOneNote } from '@/app/utils/api/mongoApi'
import { format } from 'date-fns'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { INote } from '../page'
import styles from './note.module.scss'

const Note = ({ params }: { params: { noteId: string } }) => {
  const [note, setNote] = useState<INote>()
  const [err, setErr] = useState<string>('')

  useEffect(() => {
    getOneNote(params.noteId)
      .then(data => setNote(data.note))
      .catch(err => setErr(err))
  }, [params.noteId])

  return (
    <div className={styles.noteContainer}>
      {note &&
        <>
          <div className={styles.headingContainer}>
            <div className={styles.titleContainer}>
              <h2>{note.title}</h2>
              <p className={styles.date}>{`Created on: ${format(new Date(note.createdAt), 'PPP')}`}</p>
            </div>
            <div className={styles.underline} style={{ backgroundColor: note.tag }}></div>
          </div>
          <ReactMarkdown remarkPlugins={[remarkGfm]} className={styles.text} components={{
            code({ inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter
                  language={match[1]}
                  {...props}
                  style={materialDark}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) :
                (
                  <code className={styles.codeBlock} {...props}>
                    {children}
                  </code>
                )
            }
          }}>{note.note}</ReactMarkdown>
        </>
      }
      {err && <p>There has been an error!</p>}
    </div>
  )
}

export default Note