import { useDispatch, useSelector } from "react-redux";
import { Todo as todoType } from "../App";
import { MdDelete } from "react-icons/md";
import { deleteTodo, toggleTodo } from "./Redux";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { AiOutlineCheckSquare } from "react-icons/ai";
import { RootState } from "./Redux";
import "../style/TodoContainer.css";

const TodoContainer = () => {
  const todos = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();

  return (
    <>
      <h1 className="title-container">Liste des tâches</h1>
      <ul>
        {todos.map((todo: todoType) => (
          <li className="todo-container" key={todo.id}>
            <div className="todo-title">{todo.title}</div>
            <div className="todo-content">{todo.content}</div>
            <div className="delete-validate">
              <button className="toggle-box" onClick={() => dispatch(toggleTodo(todo.id))}>
                {todo.done ? (
                  <AiOutlineCheckSquare />
                ) : (
                  <MdCheckBoxOutlineBlank />
                )}
              </button>
              <button className="delete-icon" onClick={() => dispatch(deleteTodo(todo.id))}>
                <MdDelete />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
export default TodoContainer;
