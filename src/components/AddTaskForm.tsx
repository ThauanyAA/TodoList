import { PlusCircle } from 'phosphor-react';
import styles from './AddTaskForm.module.css';
import { useState, FormEvent } from 'react';
import { Task } from '../types/task'

interface AddTaskFormProps {
  onCreateTask: (task: Task) => void;
}

export function AddTaskForm({ onCreateTask }: AddTaskFormProps) {
  const [titleTask, setTitleTask] = useState('');
  function handleCreateTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (titleTask) {
      onCreateTask({
        id: String(Math.random()),
        title: titleTask,
        isCompleted: false,
      });
      setTitleTask('');
    }
  } 
  return (
    <form onSubmit={handleCreateTask} className={styles.form}>
      <div className={styles.inputRoot}>
        <input
          className={styles.inputField} 
          placeholder="Adicione uma nova tarefa"
          value={titleTask}
          onChange={event => setTitleTask(event.target.value)}
        />
      </div>
      <button
        type="submit"
      >
        Criar
        <PlusCircle size={20} />
      </button>
    </form>
  )
}