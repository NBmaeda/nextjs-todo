import { useState } from "react";
import { useFetchedTodos } from "../common/hooks/useFetchedTodos";
import Main from "./Main";
import supabase from "../common/utils/supabase";

const MainContainer = () => {
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

  const changeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const deleteTodo = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from("todos")
      .delete()
      .match({ id: e.currentTarget.name });
    fetchTodos();
  };

  const deleteCompletedTodo = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from("todos")
      .delete()
      .match({ completed: true });
    fetchTodos();
  };

  const toggleCompleted = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { error } = await supabase
      .from("todos")
      .update({ completed: e.target.checked })
      .eq("id", e.target.name);
    fetchTodos();
  };
  return (
    <Main
      title={title}
      todos={todos}
      addTodo={addTodo}
      handleChangeTitle={changeTitle}
      handleClickDelete={deleteTodo}
      handleClickDeleteCompleted={deleteCompletedTodo}
      handleChangeCompleted={toggleCompleted}
    />
  );
};

export default MainContainer;
