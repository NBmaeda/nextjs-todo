import { useTodos } from "../../common/hooks/useTodos";
import type { Todo } from "../../common/types";
import styles from "./TodoItem.module.css";

// 親コンポーネントから渡されたpropsは、コンポーネントの引数として分割代入。
const TodoItem: React.FC<Todo> = ({ title, id, completed }) => {
  // 各イベントに割り当てるための関数を代入。
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
