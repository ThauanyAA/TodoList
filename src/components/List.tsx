import styles from './List.module.css'
import { Task as TaskType } from '../types/task'
import { Task } from './Task'
import Clipboard from '../assets/Clipboard.svg'

interface ListProps {
  tasks: TaskType[],
  onComplete: (task_id: string) => void,
  onDelete: (task_id: string) => void
}
export function List({ tasks, onComplete, onDelete }: ListProps) {
  const completedTasks = tasks.reduce((ac, task) => task.isCompleted ? ac + 1 : ac, 0)
  
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <span className={`${styles.stats} ${styles.blue}`}>
          Tarefas criadas{' '}
          <div className={styles.badge}>{tasks.length}</div>
        </span>
        <span className={`${styles.stats} ${styles.purple}`}>
          Concluídas{' '}
          <div className={styles.badge}>
            {completedTasks ? `${completedTasks} de ${tasks.length}` : '0'}
          </div>
        </span>
      </header>
      <main>
        {tasks.length ? tasks.map(task => (
          <Task
            key={task.id}
            task={task}
            onComplete={onComplete}
            onDelete={onDelete}
          />
        )) : (
          <div className={styles.emptyState}>
            <img src={Clipboard} />
            <p>
              <strong>Você ainda não tem tarefas cadastradas.</strong>
              <br />Crie tarefas e organize seus itens a fazer
            </p>
          </div>
        )}
      </main>
    </div>
  )
}