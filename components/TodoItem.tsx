import type { Todo } from "../types/index";

const TodoItem: React.FC<Todo> = ({ text, id, isDone }: Todo) => {
  return (
    <label>
      <input type="checkbox" checked={isDone} />
      <span>{text}</span>
    </label>
  );
};

export default TodoItem;
