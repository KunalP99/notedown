import { screen, render, within } from '@testing-library/react'
import '@testing-library/jest-dom'
import user from '@testing-library/user-event'
import EditNote from '@/app/components/forms/EditNoteForm'
import { INote } from '../../page'

describe('Edit Note', () => {
  const onSubmit = jest.fn()
  const oneNote: INote =
  {
    _id: '1',
    user_id: 'user_1',
    title: 'Note 1',
    note: 'This is the first note',
    tag: '#cddaef',
    favourite: false,
    createdAt: new Date("2023-08-01"),
    updatedAt: new Date("2023-08-01")
  }

  beforeEach(() => {
    render(<EditNote onSubmit={onSubmit} noteToEdit={oneNote} />)
    onSubmit.mockClear()
  })

  it('renders correct values', () => {
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

  it('submits form when changes have been made', async () => {
    user.setup()

    const titleInput = screen.getByPlaceholderText(/title/i)
    await user.clear(titleInput)
    await user.type(titleInput, 'New Note Title')

    const noteInput = screen.getByPlaceholderText(/start writing your note here!/i)
    await user.clear(noteInput)
    await user.type(noteInput, 'This is my new note')

    const dropdown = screen.getByRole('combobox')
    await user.selectOptions(dropdown, within(dropdown).getByRole('option', { name: /green/i }))

    const editBtn = screen.getByRole('button', { name: /edit/i })
    await user.click(editBtn)

    expect(onSubmit).toHaveBeenCalledWith('New Note Title', 'This is my new note', '#e2ebe0')
  })

  it('submits form if only title is filled out', async () => {
    user.setup()

    const titleInput = screen.getByPlaceholderText(/title/i)
    await user.clear(titleInput)
    await user.type(titleInput, 'New Note Title')

    const noteInput = screen.getByPlaceholderText(/start writing your note here!/i)
    await user.clear(noteInput)

    const editBtn = screen.getByRole('button', { name: /edit/i })
    await user.click(editBtn)

    expect(onSubmit).toHaveBeenCalledWith('New Note Title', '', '#cddaef')
  })

  it('does not submit form if title is not filled out', async () => {
    user.setup()

    const titleInput = screen.getByPlaceholderText(/title/i)
    await user.clear(titleInput)

    const editBtn = screen.getByRole('button', { name: /edit/i })
    await user.click(editBtn)

    expect(onSubmit).not.toHaveBeenCalled()
  })
})  