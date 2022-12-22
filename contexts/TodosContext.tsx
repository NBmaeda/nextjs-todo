import { useReducer, createContext } from "react";
import type { Todo } from "../common/types";

type ReducerAction = {
  type: string;
  payload: any;
};

type TodosContext = {
  todosState: { value: Todo[] | undefined };
  todosDispatch: React.Dispatch<ReducerAction>;
};

type TodosProviderProps = {
  children: React.ReactNode;
};

const initialState = {
  value: [],
};

const reducer = (todosState: any, action: any) => {
  switch (action.type) {
    case "CHANGE_TODOS":
      return {
        ...todosState,
        value: action.payload,
      };
    case "INIT_TODOS":
      return {
        ...todosState,
        value: [],
      };
    default:
      return todosState;
  }
};

export const TodosContext = createContext({} as TodosContext);

export const TodosContextProvider: React.FC<TodosProviderProps> = ({
  children,
}) => {
  const [todosState, todosDispatch] = useReducer(reducer, initialState);
  return (
    <TodosContext.Provider value={{ todosState, todosDispatch }}>
      {children}
    </TodosContext.Provider>
  );
};
