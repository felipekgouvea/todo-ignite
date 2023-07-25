import { Header } from './Header/Header.tsx'
import styles from './App.module.css'
import { Tasks } from './Tasks/Tasks.tsx'

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <main>
          <Tasks />
        </main>
      </div>
    </div>
  )
}

export default App
