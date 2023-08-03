import notesStyles from '../notes/notes.module.scss'
import sidebarStyles from '../sidebar/sidebar.module.scss'
import formStyles from '../components/forms/form.module.scss'
import noteStyles from '../notes/[noteId]/note.module.scss'

// prettier-ignore
const hideSidebar = () => {
  const sidebar = document.querySelector<HTMLElement>(`.${sidebarStyles.sidebar}`)
  const noNotesContainer = document.querySelector<HTMLElement>(`.${notesStyles.noNotesContainer}`)
  const mainNotesContainer = document.querySelector<HTMLElement>(`.${notesStyles.mainNotesContainer}`)
  const form = document.querySelector<HTMLElement>(`.${formStyles.form}`)
  const noteContainer = document.querySelector<HTMLElement>(`.${noteStyles.noteContainer}`)
  const arrowOpenBtn = document.querySelector<HTMLElement>(`.${notesStyles.arrowOpenBtn}`)

  if (sidebar) {
    sidebar.classList.add(sidebarStyles.hide)
    sidebar.classList.remove(sidebarStyles.open)

    // After 300ms, hide element from DOM so content shifts to fit width of screen
    setTimeout(() => {
      sidebar.style.display = "none"

      if (noNotesContainer) noNotesContainer.style.width = "100vw"
      if (mainNotesContainer) mainNotesContainer.style.width = "100vw"
      if (form) form.style.width = '100vw'
      if (noteContainer) noteContainer.style.width = "100vw"

      if (arrowOpenBtn) arrowOpenBtn.style.display = "block"
    }, 300)
  }

}

export default hideSidebar
