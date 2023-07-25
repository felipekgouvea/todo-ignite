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
    const newTask = { id: uuidv4(), title: taskText, isComplete: false }
    setTasks([...tasks, newTask])
  }

  const deleteTask = (taskId: string) => {
    const tasksWithoutDeleteOne = tasks.filter((task) => {
      return task.id !== taskId
    })
    setTasks(tasksWithoutDeleteOne)
  }

  return (
    <div>
      <Header onAddTask={addTask} />
      <div className={styles.wrapper}>
        <main>
          <Tasks tasks={tasks} onDeleteTask={deleteTask} />
        </main>
      </div>
    </div>
  )
}

export default App
