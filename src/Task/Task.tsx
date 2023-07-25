import { TaskType } from '../types/TaskType'
import styles from './Task.module.css'
import { Trash } from 'phosphor-react'

interface TaskProps {
  task: TaskType
}

export const Task = ({ task }: TaskProps) => {
  return (
    <div className={styles.task}>
      <input type="checkbox" />
      <p>{task.title}</p>
      <button className={styles.deleteButton}>
        <Trash size={20} />
      </button>
    </div>
  )
}
