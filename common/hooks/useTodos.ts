import { useEffect, useContext } from "react";
import supabase from "../utils/supabase";
import { TitleContext } from "../../contexts/TitleContext";
import { TodosContext } from "../../contexts/TodosContext";

export const useTodos = () => {
  const { titleState, titleDispatch } = useContext(TitleContext);
  const { todosState, todosDispatch } = useContext(TodosContext);
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const { data, error } = await supabase
        .from("todos")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw error;

      todosDispatch({ type: "CHANGE_TODOS", payload: data });
    } catch (error) {
      alert(error);
      todosDispatch({ type: "INIT_TODOS", payload: [] });
    }
    console.log("fetched");
  };

  const addTodo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (titleState.value.trim().length !== 0) {
      try {
        const { data, error } = await supabase
          .from("todos")
          .insert({ title: titleState.value, completed: false })
          .select();
        if (error) throw error;

        let newTodos = todosState.value?.concat(data);
        todosDispatch({ type: "CHANGE_TODOS", payload: newTodos });
        titleDispatch({ type: "INIT_TITLE", payload: "" });
      } catch (error) {
        alert(error);
      }
    } else {
      alert("Todoを入力してください。");
    }
  };

  const deleteTodo = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase
        .from("todos")
        .delete()
        .match({ id: e.currentTarget.name })
        .select();
      if (error) throw error;
      const newTodos = todosState.value?.map((todo) => todo.id !== data[0].id);
      todosDispatch({ type: "CHANGE_TODOS", payload: newTodos });
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
        .match({ completed: true })
        .select();
      if (error) throw error;
      fetchTodos();
    } catch (error) {
      alert(error);
    }
  };

  const toggleCompleted = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase
        .from("todos")
        .update({ completed: e.target.checked })
        .eq("id", e.target.name)
        .select();
      if (error) throw error;
      const newTodos = todosState.value?.map((todo) => {
        if (todo.id === data[0].id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      console.log(newTodos);
      todosDispatch({ type: "CHANGE_TODOS", payload: newTodos });
    } catch (error) {
      alert(error);
    }
  };

  return {
    fetchTodos,
    addTodo,
    deleteTodo,
    deleteCompletedTodo,
    toggleCompleted,
  };
};