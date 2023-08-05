import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import user from '@testing-library/user-event'
import EditNote from '@/app/components/forms/EditNoteForm'

describe('Edit Note', () => {
  const setNewTitle = jest.fn()
  const setNewNote = jest.fn()
  const setNewTag = jest.fn()
  const onSubmit = jest.fn()
  const setPreview = jest.fn()

  beforeEach(() => {
    onSubmit.mockClear()
  })

  it('renders correct values', () => {
    render(<EditNote
      newTitle='Note 1'
      setNewTitle={setNewTitle}
      newNote='This is the first note'
      setNewNote={setNewNote}
      newTag='#cddaef'
      setNewTag={setNewTag}
      createdAt={new Date("2023-08-01")}
      onSubmit={onSubmit}
      preview={false}
      setPreview={setPreview}
    />)

    const titleInput = screen.getByPlaceholderText(/title/i)
    expect(titleInput).toHaveValue('Note 1')

    const noteInput = screen.getByPlaceholderText(/start writing your note here!/i)
    expect(noteInput).toHaveValue('This is the first note')

    const dropdown = screen.getByRole('combobox')
    expect(dropdown).toHaveValue('#cddaef')

    const dateElement = screen.getByText(/august 1st, 2023/i)
    expect(dateElement).toBeInTheDocument()

    const editBtn = screen.getByRole('button', { name: /edit/i })
    expect(editBtn).toBeInTheDocument()
  })

  it('submits form if only title is filled out', async () => {
    user.setup()

    render(<EditNote
      newTitle='New Note Title'
      setNewTitle={setNewTitle}
      newNote=''
      setNewNote={setNewNote}
      newTag='#ffffff'
      setNewTag={setNewTag}
      createdAt={new Date("2023-08-01")}
      onSubmit={onSubmit}
      preview={false}
      setPreview={setPreview}
    />)

    const editBtn = screen.getByRole('button', { name: /edit/i })
    await user.click(editBtn)

    expect(onSubmit).toHaveBeenCalledWith('New Note Title', '', '#ffffff')
  })

  it('does not submit form if title is not filled out', async () => {
    user.setup()

    render(<EditNote
      newTitle=''
      setNewTitle={setNewTitle}
      newNote='This is the first note'
      setNewNote={setNewNote}
      newTag='#cddaef'
      setNewTag={setNewTag}
      createdAt={new Date("2023-08-01")}
      onSubmit={onSubmit}
      preview={false}
      setPreview={setPreview}
    />)

    const titleInput = screen.getByPlaceholderText(/title/i)
    await user.clear(titleInput)

    const editBtn = screen.getByRole('button', { name: /edit/i })
    await user.click(editBtn)

    expect(onSubmit).not.toHaveBeenCalled()
  })
})  