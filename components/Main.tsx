import { useContext } from "react";
import { TodosContext } from "../contexts/TodosContext";
import TodoList from "./parts/TodoList";
import TodoForm from "./parts/TodoForm";
import styles from "../common/styles/Home.module.css";

const Main = () => {
  const { todosState } = useContext(TodosContext);
  return (
    <main className={styles.main}>
      <h2>Todo一覧</h2>

      <TodoForm />

      {todosState.value === undefined ? <p>Loading...</p> : <TodoList />}
    </main>
  );
};

export default Main;
