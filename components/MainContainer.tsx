import { TitleContextProvider } from "../contexts/TitleContext";
import { TodosContextProvider } from "../contexts/TodosContext";
import Main from "./Main";

const MainContainer = () => {
  return (
    <TitleContextProvider>
      <TodosContextProvider>
        <Main />
      </TodosContextProvider>
    </TitleContextProvider>
  );
};

export default MainContainer;
