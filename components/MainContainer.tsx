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
      try {
        const { data, error } = await supabase
          .from("todos")
          .insert({ title, completed: false });
        if (error) throw error;
        fetchTodos();
        setTitle("");
      } catch (error) {
        alert(error);
      }
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
    try {
      const { data, error } = await supabase
        .from("todos")
        .delete()
        .match({ id: e.currentTarget.name });
      if (error) throw error;
      fetchTodos();
    } catch (error) {
      alert(error);
    }
  };

  const deleteCompletedTodo = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase
        .from("todos")
        .delete()
        .match({ completed: true });
      if (error) throw error;
      fetchTodos();
    } catch (error) {
      alert(error);
    }
  };

  const toggleCompleted = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    try {
      const { error } = await supabase
        .from("todos")
        .update({ completed: e.target.checked })
        .eq("id", e.target.name);
      if (error) throw error;
      fetchTodos();
    } catch (error) {
      alert(error);
    }
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
