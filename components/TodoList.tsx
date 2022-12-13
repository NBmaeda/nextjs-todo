import TodoItem from "./TodoItem";
import type { Todo } from "../types";

const TodoList = ({
  todos,
  handleChangeCompleted,
}: {
  todos: Todo[];
  handleChangeCompleted: any;
}) => {
  if (!todos || todos.length <= 0)
    return (
      <div>
        <p>まだTodoが登録されていません。</p>
      </div>
    );

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo?.id}>
          <TodoItem
            title={todo.title}
            id={todo.id}
            completed={todo.completed}
            handleChange={handleChangeCompleted}
          />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
