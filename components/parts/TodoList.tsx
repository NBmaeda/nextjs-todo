import TodoItem from "./TodoItem";
import type { Todo } from "../../common/types";
import styles from "./TodoList.module.css";

const TodoList = ({
  todos,
  handleChangeCompleted,
  handleClickDelete,
}: {
  todos: Todo[];
  handleChangeCompleted: any;
  handleClickDelete: any;
}) => {
  if (!todos || todos.length <= 0)
    return (
      <div>
        <p>まだTodoが登録されていません。</p>
      </div>
    );

  return (
    <ul className={styles.list}>
      {todos.map((todo) => (
        <li key={todo?.id} className={styles.listItem}>
          <TodoItem
            title={todo.title}
            id={todo.id}
            completed={todo.completed}
            handleChangeCompleted={handleChangeCompleted}
            handleClickDelete={handleClickDelete}
          />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
