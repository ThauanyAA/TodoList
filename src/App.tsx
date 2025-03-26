import './global.css'
import styles from './App.module.css'
import { Header } from './components/Header'
import { AddTaskForm } from './components/AddTaskForm'

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <AddTaskForm />
      </div>
    </div>
  )
}

export default App
