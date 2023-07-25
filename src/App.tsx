import { Header } from './Header/Header.tsx'
import styles from './App.module.css'

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <main></main>
      </div>
    </div>
  )
}

export default App
