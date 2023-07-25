import styles from './page.module.scss'
import Sidebar from './sidebar/sidebar'

export default function Home() {
  return (
    <main className={styles.main}>
      <Sidebar />
    </main>
  )
}
