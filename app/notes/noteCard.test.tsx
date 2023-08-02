import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import user from '@testing-library/user-event'
import NoteCard from "../components/notes/NoteCard"
import { INote } from './page'

describe('NoteCard', () => {
  beforeEach(() => {
    render(
      <NoteCard
        _id='1'
        title='Note 1'
        tag='#cddaef'
        favourite={false}
        updatedAt={new Date("2023-08-01")}
        notes={notes}
        setNotes={setNotes} />)
  })

  const notes: INote[] = [
    {
      _id: '1',
      user_id: 'user_1',
      title: 'Note 1',
      note: 'This is the first note',
      tag: '#cddaef',
      favourite: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      _id: '2',
      user_id: 'user_2',
      title: 'Note 2',
      note: 'This is the second note',
      tag: '#ffffff',
      favourite: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      _id: '3',
      user_id: 'user_3',
      title: 'Note 3',
      note: 'This is the third note',
      tag: '#e2ebe0',
      favourite: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ]
  const setNotes = jest.fn()

  it('renders correctly with all values', () => {
    const titleElement = screen.getByRole('heading', { name: /note 1/i })
    expect(titleElement).toBeInTheDocument()

    const dateElement = screen.getByText(/august 1st, 2023/i)
    expect(dateElement).toBeInTheDocument()

    const unfilledStarImg = screen.getByAltText('Unfavourite note')
    expect(unfilledStarImg).toBeInTheDocument()

    const moreImg = screen.getByAltText(/more options/i)
    expect(moreImg).toBeInTheDocument()
  })

  it('should show dropdown when button is clicked', async () => {
    user.setup()

    const moreBtn = screen.getByRole('button', { name: /more options/i })
    await user.click(moreBtn)

    const deleteBtn = screen.getByRole('button', { name: /delete/i })
    expect(deleteBtn).toBeInTheDocument()

    const editBtn = screen.getByRole('button', { name: /edit/i })
    expect(editBtn).toBeInTheDocument()
  })
})