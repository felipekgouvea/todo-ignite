import { TaskType } from '../types/TaskType'
import styles from './Task.module.css'
import { Trash } from 'phosphor-react'

interface TaskProps {
  task: TaskType
  onDeleteTask: (id: string) => void
  onComplete: (id: string) => void
}

export const Task = ({ task, onDeleteTask, onComplete }: TaskProps) => {
  const handleDeleteTask = () => {
    onDeleteTask(task.id)
  }

  const handleComplete = () => {
    onComplete(task.id)
  }

  return (
    <div className={styles.task}>
      <input type="checkbox" onClick={handleComplete} />
      <p className={task.isComplete ? styles.taskComplete : ''}>{task.title}</p>
      <button className={styles.deleteButton} onClick={handleDeleteTask}>
        <Trash size={20} />
      </button>
    </div>
  )
}
