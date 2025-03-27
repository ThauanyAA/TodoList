import styles from './Task.module.css'
import { Check, Trash } from 'phosphor-react'
import { Task as TaskType } from '../types/task'

interface TaskProps {
  task: TaskType,
  onComplete: (task_id: string) => void,
  onDelete: (task_id: string) => void
}
export function Task({ task, onComplete, onDelete }: TaskProps) {
  return (
    <div key={task.id} className={styles.taskContainer}>
      <div className={styles.taskContent}>
        <label htmlFor={task.id}>
          <input
            type="checkbox"
            id={task.id}
            name={task.id}
            value={task.id}
            onChange={() => onComplete(task.id)}
            className={styles.checkbox}
          />
          <span className={styles.customCheckbox}>
            {task.isCompleted && <Check size={12} />}
          </span>
        </label>
        <span className={task.isCompleted ? styles.taskCompleted : undefined}>{task.title}</span>
      </div>
      <button onClick={() => onDelete(task.id)} className={styles.deleteButton}>
        <Trash />
      </button>
    </div>
  )
}