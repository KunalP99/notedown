import ReactMarkdown from 'react-markdown'
import styles from './help.module.scss'

const Help = () => {
  const bulletPoints = `
- My first bullet point
- My second bullet point
- My third bullet point
- A very **important** bullet point
`

  return (
    <div className={styles.helpContainer}>
      <h2 className={styles.title}>Help</h2>
      <p>Welcome to NoteDown: a note taking application that lets you utilize markdown to format your note. This page will help you get started.</p>
      <div className={styles.underline}></div>

      <section className={styles.createNoteSection}>
        <h3 className={styles.subtitle}>Create a note</h3>
        <p>To create a note, open the sidebar and click on the &apos;New Note&apos; button. This will direct you to a page with a form. The form <strong>requires</strong> a title for it to be submitted. You can also choose a tag colour for the note and optionally, you can fill out the text area.</p>
      </section>

      <div className={styles.underline}></div>

      <section className={styles.markdownSection}>
        <h3 className={styles.subtitle}>Markdown</h3>
        <p>The text you input into the text area will be formatted with the help of markdown. Markdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents.</p><br />
        <p>Here are just a few xamples of what you can do to customise your note: </p>
        <div>
          <h4>Headings</h4>
          <p>To add headings to your note, use the hastag (#) symbol before the word.</p>
          <div>
            <h5>Input:</h5>
            <p># Heading 1</p>
            <p>## Heading 2</p>
            <p>### Heading 3</p>
            <h5>Result:</h5>
            <div className={styles.result}>
              <ReactMarkdown># Heading 1</ReactMarkdown>
              <ReactMarkdown>## Heading 2</ReactMarkdown>
              <ReactMarkdown>### Heading 3</ReactMarkdown>
            </div>
          </div>
        </div>

        <div>
          <h4>Inline styles</h4>
          <p>To make text italic use *text* and to make text bold use **text**.</p>
          <div>
            <h5>Input:</h5>
            <p>This is *italic* and this is **bold**!</p>
            <h5>Result:</h5>
            <div>
              <div className={styles.result}>
                <ReactMarkdown>This is *italic* and this is **bold**!</ReactMarkdown>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4>Code</h4>
          <p>You can also insert code into your note. To insert code, simply use backticks: `insert code here`.</p>
          <div>
            <h5>Input:</h5>
            <p>This is how you write a console.log statement: `console.log(&quot;hello world&quot;)`.</p>
            <h5>Result</h5>
            <div className={styles.result}>
              <ReactMarkdown>This is how you write a console.log statement: `console.log(&quot;hello world&quot;)`.</ReactMarkdown>
            </div>
          </div>
        </div>

        <div>
          <h4>Lists</h4>
          <p>To add bullet points use a hyphen (-) and for a numbered list use the number followed by a period (1.).</p>
          <div>
            <h5>Input:</h5>
            <p>- My first bullet point</p>
            <p>- My second bullet point</p>
            <p>- My third bullet point</p>
            <p>- A very **important** bullet point</p>
            <h5>Result:</h5>
            <div className={styles.result}>
              <ReactMarkdown>{bulletPoints}</ReactMarkdown>
            </div>
          </div>
        </div>
      </section>


      <div className={styles.underline}></div>

      <section>
        <h3 className={styles.subtitle}>That&apos;s it!</h3>
        <p>You can now use NoteDown to its full capabilities! These were just a few examples of how markdown formats text. For a full list, please visit the official <a href='https://www.markdownguide.org/' target='_blank'>markdown website.</a></p>
      </section>
    </div>
  )
}

export default Help