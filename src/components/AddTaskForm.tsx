import { PlusCircle } from 'phosphor-react';
import styles from './AddTaskForm.module.css';
import { useState, FormEvent } from 'react';

interface AddTaskFormProps {
  onCreateTask: (task: string) => void;
}

export function AddTaskForm({ onCreateTask }: AddTaskFormProps) {
  const [task, setTask] = useState('');
  function handleCreateTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (task) {
      onCreateTask(task);
      setTask('');
    }
  } 
  return (
    <form onSubmit={handleCreateTask} className={styles.form}>
      <div className={styles.inputRoot}>
        <input
          className={styles.inputField} 
          placeholder="Adicione uma nova tarefa"
          value={task}
          onChange={event => setTask(event.target.value)}
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