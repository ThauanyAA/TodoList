import { Trash } from 'phosphor-react'
import { Task } from '../types/task'

interface ListProps {
  tasks: Task[],
  onComplete: (task_id: string) => void,
  onDelete: (task_id: string) => void
}
export function List({ tasks, onComplete, onDelete }: ListProps) {
  const completedTasks = tasks.reduce((ac, task) => task.isCompleted ? ac + 1 : ac, 0)
  
  return (
    <div>
      <header>
        <div>
          Tarefas criadas{' '}<span>{tasks.length}</span>
        </div>
        <div>
          Concluídas <span>{completedTasks}</span>
        </div>
      </header>
      <main>
        {tasks.map(task => (
          <div key={task.id}>
            <input
              type="checkbox"
              id={task.id}
              name={task.id}
              value={task.id}
              onChange={() => onComplete(task.id)}
            />
            {task.title}
            <button onClick={() => onDelete(task.id)}>
              <Trash />
            </button>
          </div>
        ))}
      </main>
    </div>
  )
}