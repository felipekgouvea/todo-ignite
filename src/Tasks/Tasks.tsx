import { Task } from '../Task/Task'
import { TaskType } from '../types/TaskType'
import styles from './Tasks.module.css'
import Clipboard from '../assets/clipboard.svg'

interface TasksProps {
  tasks: TaskType[]
  onDeleteTask: (id: string) => void
}

export const Tasks = ({ tasks, onDeleteTask }: TasksProps) => {
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
          return <Task key={task.id} task={task} onDeleteTask={onDeleteTask} />
        })}

        {tasksQuantity === 0 && (
          <div className={styles.hasNoTasks}>
            <img src={Clipboard} alt="Sem Tarefas" />
            <p>Você ainda não tem tarefas cadastradas</p>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
        )}
      </div>
    </section>
  )
}
