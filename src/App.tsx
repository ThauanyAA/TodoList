import { useState } from 'react'
import { Header } from './components/Header'
import { AddTaskForm } from './components/AddTaskForm'
import './global.css'
import styles from './App.module.css'
import { Task } from './types/task'
import { List } from './components/List'


function App() {
  const [tasks, setTasks] = useState<Task[]>([])
  
  function handleCreateTask(task: Task) {
    setTasks([...tasks, task])
  }

  function handleCompleteTask(task_id: string) {
    const newTasks = tasks.map(t => {
      if (t.id === task_id) {
        return {
          ...t,
          isCompleted: !t.isCompleted
        }
      }
      return t
    })
    setTasks(newTasks)
  }

  function handleDeleteTask(task_id: string) {
    const newTasks = tasks.filter(t => t.id !== task_id)
    setTasks(newTasks)
  }

  console.log(tasks)
  
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <AddTaskForm onCreateTask={handleCreateTask} />
        <List
          tasks={tasks}
          onComplete={handleCompleteTask}
          onDelete={handleDeleteTask}
        />
      </div>
    </div>
  )
}

export default App
