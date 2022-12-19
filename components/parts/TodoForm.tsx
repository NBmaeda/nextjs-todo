import styles from "./TodoForm.module.css";

const TodoForm = ({
  title,
  handleSubmit,
  handleChangeTitle,
  handleClickDeleteCompleted,
}: {
  title: string;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  handleChangeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClickDeleteCompleted: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => Promise<void>;
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="todoname"
        placeholder="Todoを登録する"
        value={title}
        onChange={handleChangeTitle}
        className={styles.input}
      />
      <button
        type="submit"
        className={`${styles.button} button`}
        disabled={!title}
      >
        Todoを追加
      </button>
      <button
        type="button"
        onClick={handleClickDeleteCompleted}
        className={`${styles.button} button`}
      >
        完了済みのTodoを削除
      </button>
    </form>
  );
};

export default TodoForm;
