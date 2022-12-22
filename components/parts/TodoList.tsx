import { useContext } from "react";
import { TodosContext } from "../../contexts/TodosContext";
import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css";

const TodoList = () => {
  const { todosState } = useContext(TodosContext);
  if (!todosState.value || todosState.value.length <= 0)
    return (
      <div>
        <p>まだTodoが登録されていません。</p>
      </div>
    );

  return (
    <ul className={styles.list}>
      {todosState.value.map((todo) => (
        <li key={todo.title} className={styles.listItem}>
          <TodoItem
            title={todo.title}
            id={todo.id}
            completed={todo.completed}
          />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
