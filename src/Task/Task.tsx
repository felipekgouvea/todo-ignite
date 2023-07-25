import styles from './Task.module.css'
import { Trash } from 'phosphor-react'

export const Task = () => {
  return (
    <div className={styles.task}>
      <input type="checkbox" />
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos</p>
      <button className={styles.deleteButton}>
        <Trash size={20} />
      </button>
    </div>
  )
}
