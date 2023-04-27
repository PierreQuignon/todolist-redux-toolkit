import TodoContainer from "./components/TodoContainer.tsx";
import TodoCounter from "./components/TodoCounter";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./components/Redux";
import { FC } from "react";
import TodoAdder from "./components/TodoAdder.tsx";
import "../src/style/GlobalStyleApp.css"

export interface Todo {
  id: number;
  title: string;
  done: boolean;
  content: string;
}

const App: FC = () => {
  return (
    <>
      <Provider store={store}>
        <div className="main-container">
          <div>
            <TodoAdder />
            <TodoCounter />
          </div>
            <div className="main-todo-container">
              <TodoContainer />
            </div>
        </div>
      </Provider>
    </>
  );
};

export default App;
