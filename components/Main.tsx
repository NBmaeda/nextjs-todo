import { useState } from "react";
import { useFetchedTodos } from "../hooks/useFetchedTodos";
import supabase from "../utils/supabase";
import TodoList from "../components/TodoList";
import styles from "../styles/Home.module.css";

const Main: React.FC = () => {
  const [title, setTitle] = useState("");
  const { todos, fetchTodos } = useFetchedTodos();
  const addTodo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title.trim().length !== 0) {
      await supabase.from("todos").insert({ title, completed: false });
      fetchTodos();
      setTitle("");
    } else {
      alert("Todoを入力してください。");
    }
  };

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleChangeCompleted = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    e.preventDefault();
    const { error } = await supabase
      .from("todos")
      .update({ completed: e.target.checked })
      .eq("id", e.target.name);
    fetchTodos();
  };

  const handleClickDelete = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from("todos")
      .delete()
      .match({ id: e.currentTarget.name });
    fetchTodos();
  };

  const handleClickDeleteCompleted = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from("todos")
      .delete()
      .match({ completed: true });
    fetchTodos();
  };
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
        <button type="submit">Todoを追加</button>
        <button type="button" onClick={handleClickDeleteCompleted}>
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
