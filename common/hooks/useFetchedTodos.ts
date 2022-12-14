import { useEffect, useState } from "react";
import supabase from "../utils/supabase";
import { Todo } from "../types";

// data, error 用の型定義 →https://supabase.com/docs/reference/javascript/typescript-support
// export const fetchTodos = async () =>  await supabase.from("todos").select("*");
// type TodoResponse = Awaited<ReturnType<typeof fetchTodos>>
// export type TodoResponseSuccess = TodoResponse['data']
// export type TodoResponseError = TodoResponse['error']

export const useFetchedTodos = () => {
  const [todos, setTodos] = useState<Todo[] | null>(null);

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

      setTodos(data);
    } catch (error) {
      alert(error);
      setTodos([]);
    }
  };

  return { todos, fetchTodos };
};
