import sidebarStyles from '../sidebar/sidebar.module.scss'
import notesStyles from '../notes/notes.module.scss'
import formStyles from '../components/forms/form.module.scss'
import noteStyles from '../notes/[noteId]/note.module.scss'
import previewStyles from '../components/preview/preview.module.scss'
import helpStyles from '../help/help.module.scss'

// prettier-ignore
const openSidebar = (windowWidth: number) => {
  const sidebar = document.querySelector<HTMLElement>(`.${sidebarStyles.sidebar}`)
  const arrowOpenBtn = document.querySelector<HTMLElement>(`.${notesStyles.arrowOpenBtn}`)
  const mainNotesContainer = document.querySelector<HTMLElement>(`.${notesStyles.mainNotesContainer}`)
  const form = document.querySelector<HTMLElement>( `.${formStyles.form}`)
  const noNotesContainer = document.querySelector<HTMLElement>(`.${notesStyles.noNotesContainer}`)
  const noteContainer = document.querySelector<HTMLElement>(`.${noteStyles.noteContainer}`)
  const previewContainer = document.querySelector<HTMLElement>(`.${previewStyles.previewContainer}`)
  const helpContainer = document.querySelector<HTMLElement>(`.${helpStyles.helpContainer}`)


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

      if (form) {
        if (windowWidth >= 800 && windowWidth < 1000) form.style.width = '55vw'
        if (windowWidth >= 1000 && windowWidth < 1200) form.style.width = '60vw'
        if (windowWidth >= 1200 && windowWidth < 1700) form.style.width = '70vw'
        if (windowWidth >= 1700) form.style.width = '80vw'
      }

      if (noteContainer) {
        if (windowWidth >= 800 && windowWidth < 1000) noteContainer.style.width = '55vw'
        if (windowWidth >= 1000 && windowWidth < 1200) noteContainer.style.width = '60vw'
        if (windowWidth >= 1200 && windowWidth < 1700) noteContainer.style.width = '70vw'
        if (windowWidth >= 1700) noteContainer.style.width = '80vw'
      }

      if (previewContainer) {
        if (windowWidth >= 800 && windowWidth < 1000) previewContainer.style.width = '55vw'
        if (windowWidth >= 1000 && windowWidth < 1200) previewContainer.style.width = '60vw'
        if (windowWidth >= 1200 && windowWidth < 1700) previewContainer.style.width = '70vw'
        if (windowWidth >= 1700) previewContainer.style.width = '80vw'
      }

      if (helpContainer) {
        if (windowWidth >= 800 && windowWidth < 1000) helpContainer.style.width = '55vw'
        if (windowWidth >= 1000 && windowWidth < 1200) helpContainer.style.width = '60vw'
        if (windowWidth >= 1200 && windowWidth < 1700) helpContainer.style.width = '70vw'
        if (windowWidth >= 1700) helpContainer.style.width = '80vw'
      }

      if (arrowOpenBtn) {
        arrowOpenBtn.style.display = "none"
      }
    }, 300)
  }
}

export default openSidebar
