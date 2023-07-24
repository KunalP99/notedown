import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Sidebar from './sidebar'

describe('Sidebar', () => {
  it('renders correctly', () => {
    render(<Sidebar />)

    const headingElement = screen.getByRole('heading', { name: 'NoteDown' })
    expect(headingElement).toBeInTheDocument()

    const newNotesButton = screen.getByRole('button', { name: 'New Note' })
    expect(newNotesButton).toBeInTheDocument()

    const notesButton = screen.getByRole('button', { name: 'Notes' })
    expect(notesButton).toBeInTheDocument()

    const helpButton = screen.getByRole('button', { name: 'Help' })
    expect(helpButton).toBeInTheDocument()
  })
})
