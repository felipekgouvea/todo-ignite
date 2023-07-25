import { useState } from 'react'
import { Header } from './Header/Header.tsx'
import styles from './App.module.css'
import { Tasks } from './Tasks/Tasks.tsx'
import { v4 as uuidv4 } from 'uuid'
import { TaskType } from './types/TaskType.ts'

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([])

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

  const toggleTaskCompleteById = (taskId: string) => {
    const newTask = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isComplete: !task.isComplete,
        }
      }
      return task
    })
    setTasks(newTask)
  }

  return (
    <div>
      <Header onAddTask={addTask} />
      <div className={styles.wrapper}>
        <main>
          <Tasks
            tasks={tasks}
            onDeleteTask={deleteTask}
            onComplete={toggleTaskCompleteById}
          />
        </main>
      </div>
    </div>
  )
}

export default App
