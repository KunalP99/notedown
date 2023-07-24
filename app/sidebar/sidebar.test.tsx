import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Sidebar from './sidebar'

describe('Sidebar', () => {
  it('renders correctly', () => {
    render(<Sidebar />)

    const headingElement = screen.getByRole('heading', { name: 'NoteDown' })
    expect(headingElement).toBeInTheDocument()

    const newNotesLink = screen.getByRole('link', { name: 'New Note' })
    expect(newNotesLink).toBeInTheDocument()

    const notesLink = screen.getByRole('link', { name: 'Notes' })
    expect(notesLink).toBeInTheDocument()

    const helpLink = screen.getByRole('link', { name: 'Help' })
    expect(helpLink).toBeInTheDocument()
  })
})
