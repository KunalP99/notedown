import { screen, render, within } from '@testing-library/react'
import '@testing-library/jest-dom'
import user from '@testing-library/user-event'
import CreateNoteForm from '@/app/components/forms/CreateNoteForm'

describe('Create Note', () => {
  const onSubmit = jest.fn()

  beforeEach(() => {
    render(<CreateNoteForm onSubmit={onSubmit} />)
    onSubmit.mockClear()
  })

  it('renders correctly', () => {
    const titleInput = screen.getByPlaceholderText(/title/i)
    expect(titleInput).toBeInTheDocument()

    const noteInput = screen.getByPlaceholderText(/start writing your note here!/i)
    expect(noteInput).toBeInTheDocument()

    const submitBtn = screen.getByRole('button', { name: /create/i })
    expect(submitBtn).toBeInTheDocument()
  })

  it('submits form if all fields pass validation', async () => {
    user.setup()

    const titleInput = screen.getByPlaceholderText(/title/i)
    await user.type(titleInput, 'Note Title')

    const noteInput = screen.getByPlaceholderText(/start writing your note here!/i)
    await user.type(noteInput, '# Hello, *world*!')

    const dropdown = screen.getByRole('combobox')
    await user.selectOptions(dropdown, within(dropdown).getByRole('option', { name: /green/i }))

    const submitBtn = screen.getByRole('button', { name: /create/i })
    await user.click(submitBtn)

    expect(onSubmit).toHaveBeenCalledWith("Note Title", "# Hello, *world*!", "#e2ebe0")
  })

  it('submits form if only title is filled out', async () => {
    user.setup()

    const titleInput = screen.getByPlaceholderText(/title/i)
    await user.type(titleInput, 'Note Title')

    const submitBtn = screen.getByRole('button', { name: /create/i })
    await user.click(submitBtn)
    expect(onSubmit).toHaveBeenCalledWith("Note Title", "", "")
  })

  it('does not submit form if title is not filled', async () => {
    user.setup()

    const noteInput = screen.getByPlaceholderText(/start writing your note here!/i)
    await user.type(noteInput, '# Hello, *world*!')

    const dropdown = screen.getByRole('combobox')
    await user.selectOptions(dropdown, within(dropdown).getByRole('option', { name: /green/i }))

    const submitBtn = screen.getByRole('button', { name: /create/i })
    await user.click(submitBtn)
    expect(onSubmit).not.toHaveBeenCalled()
  })
})