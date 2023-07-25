import styles from './Header.module.css'
import TodoLogo from '../assets/todoLogo.svg'
import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, useState } from 'react'

interface HeaderProps {
  onAddTask: (taskText: string) => void
}

export const Header = ({ onAddTask }: HeaderProps) => {
  const [taskText, setTaskText] = useState('')

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    onAddTask(taskText)
    setTaskText('')
  }

  const handleTextTask = (event: ChangeEvent<HTMLInputElement>) => {
    setTaskText(event.target.value)
  }

  return (
    <header className={styles.header}>
      <img src={TodoLogo} alt="LogoTodo" />
      <form onSubmit={handleSubmit} className={styles.newTaskForm}>
        <input
          type="text"
          placeholder="Adicionar uma nova tarefa"
          onChange={handleTextTask}
          value={taskText}
        />
        <button>
          Criar <PlusCircle size={18} />
        </button>
      </form>
    </header>
  )
}
