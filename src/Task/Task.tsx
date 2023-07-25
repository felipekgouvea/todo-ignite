import { TaskType } from '../types/TaskType'
import styles from './Task.module.css'
import { Trash } from 'phosphor-react'

interface TaskProps {
  task: TaskType
  onComplete: () => void
}

export const Task = ({ task, onComplete }: TaskProps) => {
  return (
    <div className={task.isComplete ? styles.taskComplete : styles.task}>
      <input type="checkbox" />
      <p>{task.title}</p>
      <button className={styles.deleteButton}>
        <Trash size={20} />
      </button>
    </div>
  )
}
