import type { TodoItem } from "../types/index";

const TodoItem: React.FC<TodoItem> = ({
  title,
  id,
  completed,
  handleChangeCompleted,
  handleClickDelete,
}: TodoItem) => {
  return (
    <p>
      <label>
        <input
          type="checkbox"
          checked={completed}
          name={id}
          onChange={handleChangeCompleted}
        />
        <span>{title}</span>
      </label>
      <button name={id} onClick={handleClickDelete}>
        削除
      </button>
    </p>
  );
};

export default TodoItem;
