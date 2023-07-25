import styles from './Header.module.css'
import TodoLogo from '../assets/todoLogo.svg'
import { PlusCircle } from 'phosphor-react'

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={TodoLogo} alt="LogoTodo" />

      <form className={styles.newTaskForm}>
        <input type="text" placeholder="Adicionar uma nova tarefa" />
        <button>
          Criar <PlusCircle size={18} />
        </button>
      </form>
    </header>
  )
}
