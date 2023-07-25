import { TaskType } from '../types/TaskType'
import styles from './Task.module.css'
import { Trash } from 'phosphor-react'

interface TaskProps {
  task: TaskType
  onDeleteTask: (id: string) => void
}

export const Task = ({ task, onDeleteTask }: TaskProps) => {
  const handleDeleteTask = () => {
    onDeleteTask(task.id)
  }

  return (
    <div className={styles.task}>
      <input type="checkbox" />
      <p>{task.title}</p>
      <button className={styles.deleteButton} onClick={handleDeleteTask}>
        <Trash size={20} />
      </button>
    </div>
  )
}
