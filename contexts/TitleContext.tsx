import { useReducer, createContext } from "react";

type ReducerAction = {
  type: string;
  payload: any;
};

type TitleContext = {
  titleState: { value: string };
  titleDispatch: React.Dispatch<ReducerAction>;
};

type TextProviderProps = {
  children: React.ReactNode;
};

const initialState = {
  value: "",
};

const reducer = (titleState: any, action: any) => {
  switch (action.type) {
    case "CHANGE_TITLE":
      return {
        ...titleState,
        value: action.payload,
      };
    case "INIT_TITLE":
      return {
        ...titleState,
        value: "",
      };
    default:
      return titleState;
  }
};

export const TitleContext = createContext({} as TitleContext);

export const TitleContextProvider: React.FC<TextProviderProps> = ({
  children,
}) => {
  const [titleState, titleDispatch] = useReducer(reducer, initialState);
  return (
    <TitleContext.Provider value={{ titleState, titleDispatch }}>
      {children}
    </TitleContext.Provider>
  );
};
