import type { TodoItem } from "../../common/types";
import styles from "./TodoItem.module.css";

const TodoItem: React.FC<TodoItem> = ({
  title,
  id,
  completed,
  handleChangeCompleted,
  handleClickDelete,
}: TodoItem) => {
  return (
    <>
      <label className={styles.label}>
        <input
          type="checkbox"
          checked={completed}
          name={id}
          onChange={handleChangeCompleted}
          className={styles.checkbox}
        />
        <span className={styles.title}>{title}</span>
      </label>
      <button
        name={id}
        onClick={handleClickDelete}
        className={`${styles.button} button`}
      >
        削除
      </button>
    </>
  );
};

export default TodoItem;
