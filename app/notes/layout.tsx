import { ReactNode } from "react"
import Sidebar from "../sidebar/sidebar"
import '../global.scss'

const NotesLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="container">
      <Sidebar />
      {children}
    </div>
  )
}

export default NotesLayout