import { Task } from '../Task/Task'
import { TaskType } from '../types/TaskType'
import styles from './Tasks.module.css'

interface TasksProps {
  tasks: TaskType
}

export const Tasks = ({ tasks }: TasksProps) => {
  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Tarefas criadas</p>
          <span>10</span>
        </div>
        <div>
          <p className={styles.textPurple}>Concluídas</p>
          <span>0 de 10</span>
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
