import sidebarStyles from "../sidebar/sidebar.module.scss"
import notesStyles from "../notes/notes.module.scss"
// prettier-ignore
const openSidebar = (windowWidth: number) => {
  const sidebar = document.querySelector<HTMLElement>(`.${sidebarStyles.sidebar}`)
  const arrowOpenBtn = document.querySelector<HTMLElement>(`.${notesStyles.arrowOpenBtn}`)
  const mainNotesContainer = document.querySelector<HTMLElement>(`.${notesStyles.mainNotesContainer}`)
  const noNotesContainer = document.querySelector<HTMLElement>(`.${notesStyles.noNotesContainer}`)

  console.log(arrowOpenBtn)

  if (sidebar) {
    sidebar.classList.add(sidebarStyles.open)
    sidebar.classList.remove(sidebarStyles.hide)

    // Allow animation to play in 300ms
    setTimeout(() => {
      sidebar.style.display = "block"

      // Check window width and set width of containers accordingly
      if (mainNotesContainer) {
        if (windowWidth >= 800 && windowWidth < 1200) mainNotesContainer.style.width = "50vw"
        if (windowWidth >= 1200 && windowWidth < 1700) mainNotesContainer.style.width = "70vw"
        if (windowWidth >= 1700) mainNotesContainer.style.width = "80vw"
      }

      if (noNotesContainer) {
        if (windowWidth >= 800 && windowWidth < 1200) noNotesContainer.style.width = "50vw"
        if (windowWidth >= 1200 && windowWidth < 1700) noNotesContainer.style.width = "70vw"
        if (windowWidth >= 1700) noNotesContainer.style.width = "80vw"
      }

      if (arrowOpenBtn) {
        arrowOpenBtn.style.display = "none"
      }
    }, 300)
  }
}

export default openSidebar
