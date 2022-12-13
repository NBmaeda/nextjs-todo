import TodoItem from "./TodoItem";
import { Todo } from "../types";
type Todos = {
  todos: Todo[];
};

const TodoList: React.FC<Todos> = ({ todos }: Todos) => {
  if (todos.length <= 0)
    return (
      <div>
        <p>まだTodoが登録されていません。</p>
      </div>
    );

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <TodoItem {...todo} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
