import { useContext } from "react";
import { TitleContext } from "../../contexts/TitleContext";
import { useTodos } from "../../common/hooks/useTodos";
import styles from "./TodoForm.module.css";
const TodoForm = () => {
  const { addTodo, deleteCompletedTodo } = useTodos();
  const { titleState, titleDispatch } = useContext(TitleContext);

  return (
    <form onSubmit={addTodo}>
      <input
        type="text"
        name="todoname"
        placeholder="Todoを登録する"
        value={titleState.value}
        onChange={(e) =>
          titleDispatch({
            type: "CHANGE_TITLE",
            payload: e.target.value,
          })
        }
        className={styles.input}
      />
      <button
        type="submit"
        className={`${styles.button} button`}
        disabled={!titleState.value}
      >
        Todoを追加
      </button>
      <button
        type="button"
        onClick={deleteCompletedTodo}
        className={`${styles.button} button`}
      >
        完了済みのTodoを削除
      </button>
    </form>
  );
};

export default TodoForm;
