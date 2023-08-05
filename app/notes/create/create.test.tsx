import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import user from '@testing-library/user-event'
import CreateNoteForm from '@/app/components/forms/CreateNoteForm'

describe('Create Note', () => {
  const setTitle = jest.fn()
  const setNote = jest.fn()
  const setTag = jest.fn()
  const onSubmit = jest.fn()
  const setPreview = jest.fn()

  beforeEach(() => {
    onSubmit.mockClear()
  })

  it('renders correctly', () => {
    render(<CreateNoteForm
      title='Note Title'
      setTitle={setTitle}
      note='# Hello, *world*!'
      setNote={setNote}
      tag='#e2ebe0'
      setTag={setTag}
      onSubmit={onSubmit}
      preview={false}
      setPreview={setPreview}
    />)

    const titleInput = screen.getByPlaceholderText(/title/i)
    expect(titleInput).toBeInTheDocument()

    const noteInput = screen.getByPlaceholderText(/start writing your note here!/i)
    expect(noteInput).toBeInTheDocument()

    const previewBtn = screen.getByRole('button', { name: /preview/i })
    expect(previewBtn).toBeInTheDocument()

    const submitBtn = screen.getByRole('button', { name: /create/i })
    expect(submitBtn).toBeInTheDocument()
  })

  it('submits form if all fields pass validation', async () => {
    user.setup()

    render(<CreateNoteForm
      title='Note Title'
      setTitle={setTitle}
      note='# Hello, *world*!'
      setNote={setNote}
      tag='#e2ebe0'
      setTag={setTag}
      onSubmit={onSubmit}
      preview={false}
      setPreview={setPreview}
    />)

    const submitBtn = screen.getByRole('button', { name: /create/i })
    await user.click(submitBtn)

    expect(onSubmit).toHaveBeenCalledWith("Note Title", "# Hello, *world*!", "#e2ebe0")
  })

  it('submits form if only title is filled out', async () => {
    user.setup()

    render(<CreateNoteForm
      title='Note Title'
      setTitle={setTitle}
      note=''
      setNote={setNote}
      tag=''
      setTag={setTag}
      onSubmit={onSubmit}
      preview={false}
      setPreview={setPreview}
    />)

    const submitBtn = screen.getByRole('button', { name: /create/i })
    await user.click(submitBtn)
    expect(onSubmit).toHaveBeenCalledWith("Note Title", "", "#ffffff")
  })

  it('does not submit form if title is not filled', async () => {
    user.setup()

    render(<CreateNoteForm
      title=''
      setTitle={setTitle}
      note='# Hello, *world*!'
      setNote={setNote}
      tag='#e2ebe0'
      setTag={setTag}
      onSubmit={onSubmit}
      preview={false}
      setPreview={setPreview}
    />)

    const submitBtn = screen.getByRole('button', { name: /create/i })
    await user.click(submitBtn)
    expect(onSubmit).not.toHaveBeenCalled()
  })
})