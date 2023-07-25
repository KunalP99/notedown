import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Notes from './page'
// import userEvent from '@testing-library/user-event'

beforeEach(() => {
  render(<Notes />)
})

describe('Notes', () => {
  it.only('renders correctly when there are no notes', () => {
    const headingElement = screen.getByRole('heading', { name: 'My Notes' })
    expect(headingElement).toBeInTheDocument()

    const img = screen.getByAltText('No notes')
    expect(img).toBeInTheDocument()

    const textElement = screen.getByText(`You have not created any notes... `)
    expect(textElement).toBeInTheDocument()
  })

  it('renders correctly when there are notes', () => {
    const headingElement = screen.getByRole('heading', { name: 'My Notes' })
    expect(headingElement).toBeInTheDocument()

    const recentsBtn = screen.getByRole('button', { name: 'Recents' })
    expect(recentsBtn).toBeInTheDocument()

    const favouritesBtn = screen.getByRole('button', { name: 'Favourites' })
    expect(favouritesBtn).toBeInTheDocument()

    const searchBar = screen.getByRole('input', { name: 'search-notes' })
    expect(searchBar).toBeInTheDocument()
  })
})