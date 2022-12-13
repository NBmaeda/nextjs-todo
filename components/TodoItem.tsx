import type { TodoItem } from "../types/index";

const TodoItem: React.FC<TodoItem> = ({
  title,
  id,
  completed,
  handleChange,
}: TodoItem) => {
  return (
    <label>
      <input
        type="checkbox"
        checked={completed}
        name={id}
        onChange={handleChange}
      />
      <span>{title}</span>
    </label>
  );
};

export default TodoItem;
