// import TodoAdder from "./components/TodoAdder";
import TodoContainer from "./components/TodoContainer.tsx";
// import TodoCounter from "./components/TodoCounter";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./components/Redux";
import { FC } from "react";
import TodoAdder from "./components/TodoAdder.tsx";

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
        <div className="flex justify-center p-5 m-5 gap-5">
          <div className="w-1/3">
            <TodoAdder />
          </div>
          <div className=" flex text-center border border-black p-5 rounded w-2/3 gap-5">
            <div className="w-4/5">
              <TodoContainer />
            </div>
            <div className="w-1/5">
              {/* <TodoCounter/> */}
            </div>
          </div>
        </div>
      </Provider>
    </>
  );
};

export default App;
