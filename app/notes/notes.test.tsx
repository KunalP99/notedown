import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Notes from './page'
import INotes from '../models/notes/INotes'
// import userEvent from '@testing-library/user-event'

describe('Notes', () => {
  const emptyNotes: INotes[] = []
  const oneNote: INotes[] = [{ title: 'Note 1', text: 'This is the first note' }]

  it('renders correctly when there are no notes', () => {
    render(<Notes notes={emptyNotes} />)

    const headingElement = screen.getByRole('heading', { name: 'My Notes' })
    expect(headingElement).toBeInTheDocument()

    const img = screen.getByAltText('No notes')
    expect(img).toBeInTheDocument()

    const textElement = screen.getByText(`You have not created any notes...`)
    expect(textElement).toBeInTheDocument()
  })

  it('renders correctly when there are notes', () => {
    render(<Notes notes={oneNote} />)
    const headingElement = screen.getByRole('heading', { name: 'My Notes' })
    expect(headingElement).toBeInTheDocument()

    const recentsBtn = screen.getByRole('button', { name: 'Recents' })
    expect(recentsBtn).toBeInTheDocument()

    const favouritesBtn = screen.getByRole('button', { name: 'Favourites' })
    expect(favouritesBtn).toBeInTheDocument()

    const searchBar = screen.getByPlaceholderText('Search...')
    expect(searchBar).toBeInTheDocument()
  })
})