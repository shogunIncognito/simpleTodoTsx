import { useEffect, useState } from 'react'
import './App.css'
import Form from './components/Form'
import Tasks from './components/Tasks'
import { taskState } from './types'

interface AppStates {
  tasks: Array<taskState>
}

function App() {
  const [tasks, setTasks] = useState<AppStates['tasks']>([])

  useEffect(() => {
    const existTasks = localStorage.getItem('tasks')
    const localTasks = existTasks ? JSON.parse(existTasks) : []
    setTasks(localTasks)
  }, [])

  const addTask = (task: taskState) => {
    const newTasks = [...tasks, task]
    setTasks(newTasks)
    localStorage.setItem('tasks', JSON.stringify(newTasks))
  }

  const deleteTask = (id: number) => {
    const newTasks = tasks.filter(task => task.id !== id)
    setTasks(newTasks)
    localStorage.setItem('tasks', JSON.stringify(newTasks))
  }

  return (
    <div className="App">
      <Form addTask={addTask} />
      <Tasks deleteTask={deleteTask} tasks={tasks} />
    </div>
  )
}

export default App
