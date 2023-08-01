import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import user from '@testing-library/user-event'
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
  const multipleNotes: INote[] = [
    {
      _id: '1234',
      user_id: 'user_1',
      title: 'Note 1',
      note: 'This is the first note',
      tag: '#cddaef',
      favourite: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      _id: '12345',
      user_id: 'user_2',
      title: 'Note 2',
      note: 'This is the second note',
      tag: '#ffffff',
      favourite: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      _id: '123456',
      user_id: 'user_3',
      title: 'Note 3',
      note: 'This is the third note',
      tag: '#e2ebe0',
      favourite: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ]
  const setOnFav = jest.fn()

  it('renders correctly when there are no notes', () => {
    render(<NotesContainer notes={emptyNotes} onFav={false} setOnFav={setOnFav} err='' />)

    const img = screen.getByAltText(/no notes/i)
    expect(img).toBeInTheDocument()

    const textElement = screen.getByText(/you have not created any notes.../i)
    expect(textElement).toBeInTheDocument()
  })

  it('renders correctly when there are notes', () => {
    render(<NotesContainer notes={oneNote} onFav={false} setOnFav={setOnFav} err='' />)

    const recentsBtn = screen.getByRole('button', { name: /recents/i })
    expect(recentsBtn).toBeInTheDocument()

    const favouritesBtn = screen.getByRole('button', { name: /favourites/i })
    expect(favouritesBtn).toBeInTheDocument()

    const searchBar = screen.getByPlaceholderText(/search.../i)
    expect(searchBar).toBeInTheDocument()
  })

  it('shows only favourited notes when on favourites tab', async () => {
    user.setup()

    render(<NotesContainer notes={multipleNotes} onFav={true} setOnFav={(setOnFav)} err='' />)
    const firstNote = screen.queryByRole('heading', { name: /note 1/i })
    expect(firstNote).not.toBeInTheDocument()

    const secondNote = screen.getByRole('heading', { name: /note 2/i })
    expect(secondNote).toBeInTheDocument()

    const thirdNote = screen.getByRole('heading', { name: /note 3/i })
    expect(thirdNote).toBeInTheDocument()
  })
})