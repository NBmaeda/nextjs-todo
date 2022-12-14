import TodoList from "./parts/TodoList";
import TodoForm from "./parts/TodoForm";
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

      <TodoForm
        title={title}
        handleSubmit={addTodo}
        handleChangeTitle={handleChangeTitle}
        handleClickDeleteCompleted={handleClickDeleteCompleted}
      />

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
