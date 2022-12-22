import { useTodos } from "../../common/hooks/useTodos";
import type { TodoItem } from "../../common/types";
import styles from "./TodoItem.module.css";

const TodoItem: React.FC<TodoItem> = ({ title, id, completed }) => {
  const { deleteTodo, toggleCompleted } = useTodos();
  return (
    <>
      <label className={styles.label}>
        <input
          type="checkbox"
          checked={completed}
          name={id}
          onChange={toggleCompleted}
          className={styles.checkbox}
        />
        <span className={styles.title}>{title}</span>
      </label>
      <button
        name={id}
        onClick={deleteTodo}
        className={`${styles.button} button`}
      >
        削除
      </button>
    </>
  );
};

export default TodoItem;
