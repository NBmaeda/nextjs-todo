import TodoList from "./parts/TodoList";
import styles from "../common/styles/Home.module.css";
import type { Todo } from "../common/types";

const Main = ({
  title,
  todos,
  addTodo,
  handleChangeTitle,
  handleClickDelete,
  handleClickDeleteCompleted,
  handleChangeCompleted,
}: {
  title: string;
  todos: Todo[] | null;
  addTodo: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  handleChangeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClickDelete: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => Promise<void>;
  handleClickDeleteCompleted: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => Promise<void>;
  handleChangeCompleted: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => Promise<void>;
}) => {
  return (
    <main className={styles.main}>
      <h2>Todo一覧</h2>
      <form onSubmit={addTodo}>
        <input
          type="text"
          name="todoname"
          placeholder="Do Todo"
          value={title}
          onChange={handleChangeTitle}
        />
        <button type="submit" className="button">
          Todoを追加
        </button>
        <button
          type="button"
          className="button"
          onClick={handleClickDeleteCompleted}
        >
          完了済みのTodoを削除
        </button>
      </form>
      {todos === null ? (
        <p>Loading...</p>
      ) : (
        <TodoList
          todos={todos}
          handleChangeCompleted={handleChangeCompleted}
          handleClickDelete={handleClickDelete}
        />
      )}
    </main>
  );
};

export default Main;
