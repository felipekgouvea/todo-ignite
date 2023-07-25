import { useState } from 'react'
import { Header } from './Header/Header.tsx'
import styles from './App.module.css'
import { Tasks } from './Tasks/Tasks.tsx'
import { v4 as uuidv4 } from 'uuid'
import { TaskType } from './types/TaskType.ts'

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([
    {
      id: uuidv4(),
      title: 'Realizar o desafio do Ignite',
      isComplete: false,
    },
  ])

  const addTask = (taskText: string) => {
    setTasks([...tasks, taskText])
  }

  return (
    <div>
      <Header onAddTask={addTask} />
      <div className={styles.wrapper}>
        <main>
          <Tasks tasks={tasks} />
        </main>
      </div>
    </div>
  )
}

export default App
