import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import NotesContainer from '../components/notes/NotesContainer'
import { INote } from './page'

describe('Notes', () => {
  const emptyNotes: INote[] = []
  const oneNote: INote[] =
    [
      {
        _id: '1234',
        user_id: 'user_1',
        title: 'Note 1',
        note: 'This is the first note',
        tag: '#cddaef',
        favourite: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]

  it('renders correctly when there are no notes', () => {
    render(<NotesContainer notes={emptyNotes} err='' />)

    const img = screen.getByAltText(/no notes/i)
    expect(img).toBeInTheDocument()

    const textElement = screen.getByText(/you have not created any notes.../i)
    expect(textElement).toBeInTheDocument()
  })

  it('renders correctly when there are notes', () => {
    render(<NotesContainer notes={oneNote} err='' />)

    const recentsBtn = screen.getByRole('button', { name: /recents/i })
    expect(recentsBtn).toBeInTheDocument()

    const favouritesBtn = screen.getByRole('button', { name: /favourites/i })
    expect(favouritesBtn).toBeInTheDocument()

    const searchBar = screen.getByPlaceholderText(/search.../i)
    expect(searchBar).toBeInTheDocument()
  })
})