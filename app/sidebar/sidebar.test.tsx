import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import Sidebar from './Sidebar'

beforeEach(() => {
  render(<Sidebar />)
})

describe('Sidebar', () => {
  it('renders correctly', () => {

    const headingElement = screen.getByRole('heading', { name: 'NoteDown' })
    expect(headingElement).toBeInTheDocument()

    const newNotesLink = screen.getByRole('link', { name: 'New Note' })
    expect(newNotesLink).toBeInTheDocument()

    const notesLink = screen.getByRole('link', { name: 'Notes' })
    expect(notesLink).toBeInTheDocument()

    const helpLink = screen.getByRole('link', { name: 'Help' })
    expect(helpLink).toBeInTheDocument()
  })
  it('closes sidebar when arrow button is clicked', async () => {
    userEvent.setup()

    const arrowBtn = screen.getByRole('button')
    await userEvent.click(arrowBtn)
    const sidebar = screen.getByRole('navigation')
    expect(sidebar.classList.contains('hide')).toBe(true)
  })
})
