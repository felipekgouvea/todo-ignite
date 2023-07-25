import { Task } from '../Task/Task'
import { TaskType } from '../types/TaskType'
import styles from './Tasks.module.css'

interface TasksProps {
  tasks: TaskType[]
}

export const Tasks = ({ tasks }: TasksProps) => {
  const tasksQuantity = tasks.length
  const completedTasks = tasks.filter((tasks) => tasks.isComplete).length

  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Tarefas criadas</p>
          <span>{tasksQuantity}</span>
        </div>
        <div>
          <p className={styles.textPurple}>Concluídas</p>
          <span>
            {completedTasks} de {tasksQuantity}
          </span>
        </div>
      </header>
      <div className={styles.listTasks}>
        {tasks.map((task) => {
          return <Task key={task.id} task={task} />
        })}
      </div>
    </section>
  )
}
