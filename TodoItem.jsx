// TodoItem.jsx
import { useContext } from 'react';
import TodoContext from './TodoContext';
import styles from './app.module.css';

const TodoItem = ({ todo }) => {
  const { dispatch } = useContext(TodoContext);

  return (
    <li className={styles.todoItem}>
      <span className={styles.todoText}
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
          cursor: 'pointer',
        }}
        onClick={() => dispatch({ type: 'toggle', payload: todo.id })}
      >
        {todo.text}
      </span>
      <button className={styles.button} onClick={() => dispatch({ type: 'delete', payload: todo.id })}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;