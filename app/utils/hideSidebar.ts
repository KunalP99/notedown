import notesStyles from '../notes/notes.module.scss'
import sidebarStyles from '../sidebar/sidebar.module.scss'
import createStyles from '../notes/create/create.module.scss'

// prettier-ignore
const hideSidebar = () => {
  const sidebar = document.querySelector<HTMLElement>(`.${sidebarStyles.sidebar}`)
  const noNotesContainer = document.querySelector<HTMLElement>(`.${notesStyles.noNotesContainer}`)
  const mainNotesContainer = document.querySelector<HTMLElement>(`.${notesStyles.mainNotesContainer}`)
  const createNoteForm = document.querySelector<HTMLElement>(`.${createStyles.createForm}`)
  const arrowOpenBtn = document.querySelector<HTMLElement>(`.${notesStyles.arrowOpenBtn}`)

  if (sidebar) {
    sidebar.classList.add(sidebarStyles.hide)
    sidebar.classList.remove(sidebarStyles.open)

    // After 300ms, hide element from DOM so content shifts to fit width of screen
    setTimeout(() => {
      sidebar.style.display = "none"

      if (noNotesContainer) noNotesContainer.style.width = "100vw"
      if (mainNotesContainer) mainNotesContainer.style.width = "100vw"
      if (createNoteForm) createNoteForm.style.width = "100vw"

      if (arrowOpenBtn) arrowOpenBtn.style.display = "block"
    }, 300)
  }

}

export default hideSidebar
