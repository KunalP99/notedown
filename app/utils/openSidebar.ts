import sidebarStyles from '../sidebar/sidebar.module.scss'
import notesStyles from '../notes/notes.module.scss'
import createStyles from '../notes/create/create.module.scss'

// prettier-ignore
const openSidebar = (windowWidth: number) => {
  const sidebar = document.querySelector<HTMLElement>(`.${sidebarStyles.sidebar}`)
  const arrowOpenBtn = document.querySelector<HTMLElement>(`.${notesStyles.arrowOpenBtn}`)
  const mainNotesContainer = document.querySelector<HTMLElement>(`.${notesStyles.mainNotesContainer}`)
  const createNoteForm = document.querySelector<HTMLElement>( `.${createStyles.createForm}`)
  const noNotesContainer = document.querySelector<HTMLElement>(`.${notesStyles.noNotesContainer}`)

  if (sidebar) {
    sidebar.classList.add(sidebarStyles.open)
    sidebar.classList.remove(sidebarStyles.hide)

    // Allow animation to play in 300ms
    setTimeout(() => {
      sidebar.style.display = "block"

      // Check window width and set width of containers accordingly
      // We only want to change window width on resize if sidebar is open
      if (mainNotesContainer) {
        if (windowWidth >= 800 && windowWidth < 1000) mainNotesContainer.style.width = '55vw'
        if (windowWidth >= 1000 && windowWidth < 1200) mainNotesContainer.style.width = "60vw"
        if (windowWidth >= 1200 && windowWidth < 1700) mainNotesContainer.style.width = "70vw"
        if (windowWidth >= 1700) mainNotesContainer.style.width = "80vw"
      }

      if (noNotesContainer) {
        if (windowWidth >= 800 && windowWidth < 1000) noNotesContainer.style.width = '55vw'
        if (windowWidth >= 1000 && windowWidth < 1200) noNotesContainer.style.width = "60vw"
        if (windowWidth >= 1200 && windowWidth < 1700) noNotesContainer.style.width = "70vw"
        if (windowWidth >= 1700) noNotesContainer.style.width = "80vw"
      }

      if (createNoteForm) {
        if (windowWidth >= 800 && windowWidth < 1000) createNoteForm.style.width = '55vw'
        if (windowWidth >= 1000 && windowWidth < 1200) createNoteForm.style.width = '60vw'
        if (windowWidth >= 1200 && windowWidth < 1700) createNoteForm.style.width = '70vw'
        if (windowWidth >= 1700) createNoteForm.style.width = '80vw'
      }

      if (arrowOpenBtn) {
        arrowOpenBtn.style.display = "none"
      }
    }, 300)
  }
}

export default openSidebar
