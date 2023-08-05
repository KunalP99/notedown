import { Dispatch, SetStateAction } from 'react'
import { format } from 'date-fns'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import styles from './preview.module.scss'

interface Props {
  setPreview: Dispatch<SetStateAction<boolean>>
  title: string,
  note: string,
  tag: string
}

const Preview = ({ setPreview, title, note, tag }: Props) => {
  return (
    <div className={styles.previewContainer}>
      <button onClick={() => setPreview(false)}>Back</button>
      <p className={styles.previewMode}>Preview Mode</p>
      <div className={styles.headingContainer}>
        <div className={styles.titleContainer}>
          <h2>{title}</h2>
          <p className={styles.date}>{`Created on: ${format(new Date(), 'PPP')}`}</p>
        </div>
        <div className={styles.underline} style={{ backgroundColor: tag }}></div>
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
      }}>{note}</ReactMarkdown>
    </div>
  )
}

export default Preview