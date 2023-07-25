import styles from './Header.module.css'
import TodoLogo from '../assets/todoLogo.svg'
import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

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
    event.target.setCustomValidity('')
    setTaskText(event.target.value)
  }

  const handleNewTaksInvalid = (event: InvalidEvent<HTMLInputElement>) => {
    event.target.setCustomValidity('Este campo é obrigatório')
  }

  const isNewTaskEmpty = taskText.length === 0

  return (
    <header className={styles.header}>
      <img src={TodoLogo} alt="LogoTodo" />
      <form onSubmit={handleSubmit} className={styles.newTaskForm}>
        <input
          type="text"
          placeholder="Adicionar uma nova tarefa"
          onChange={handleTextTask}
          value={taskText}
          required
          onInvalid={handleNewTaksInvalid}
        />
        <button type="submit" disabled={isNewTaskEmpty}>
          Criar <PlusCircle size={18} />
        </button>
      </form>
    </header>
  )
}
