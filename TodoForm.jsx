// TodoForm.jsx
import { useState, useContext } from 'react';
import TodoContext from './TodoContext';
import styles from './app.module.css';

const TodoForm = () => {
  const [text, setText] = useState('');
  const { dispatch } = useContext(TodoContext);

  const handleAdd = () => {
    if (text.trim()) {
      const newTodo = {
        id: Date.now(),
        text,
        completed: false,
      };
      dispatch({ type: 'add', payload: newTodo });
      setText('');
    }
  };

  return (
    <div className={styles.handleAdd}>
      <input className={styles.input}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a new todo"
      />
      <button className={styles.button} onClick={handleAdd}>Add</button>
    </div>
  );
};

export default TodoForm;