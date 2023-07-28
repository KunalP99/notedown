import { screen, render, within, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import user from '@testing-library/user-event'
import CreateNote from './page'

beforeEach(() => {
  render(<CreateNote />)
})

describe('Create Note', () => {
  const onSubmit = jest.fn()

  it('renders correctly', () => {
    const headingElement = screen.getByRole('heading', { name: /create note/i })
    expect(headingElement).toBeInTheDocument()

    const titleInput = screen.getByPlaceholderText(/title/i)
    expect(titleInput).toBeInTheDocument()

    const noteInput = screen.getByPlaceholderText(/start writing your note here!/i)
    expect(noteInput).toBeInTheDocument()

    const submitBtn = screen.getByRole('button', { name: /create/i })
    expect(submitBtn).toBeInTheDocument()
  })

  it('submits form if all fields pass validation', async () => {
    const titleInput = screen.getByPlaceholderText(/title/i)
    user.type(titleInput, 'Note Title')

    const noteInput = screen.getByPlaceholderText(/start writing your note here!/i)
    user.type(noteInput, '# Hello, *world*!')

    const dropdown = screen.getByRole('combobox', { name: /tag/i })
    user.selectOptions(dropdown, within(dropdown).getByRole('option', { name: /green/i }))

    const submitBtn = screen.getByRole('button', { name: /create/i })
    user.click(submitBtn)
    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledTimes(1)
    })

    expect(onSubmit).toHaveBeenCalledWith({ lazy: true })
  })
})