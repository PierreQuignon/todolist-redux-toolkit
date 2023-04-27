import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Todo as todoType } from "../App";
import { MdDelete } from 'react-icons/md';
import { deleteTodo, toggleTodo } from "./Redux";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { AiOutlineCheckSquare } from "react-icons/ai"
import { RootState } from "./Redux";


const TodoContainer: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();

  return (
    <div className='flex flex-col'>
      <h1>Liste des tâches</h1>
      <ul>
        {todos.map((todo: todoType) => (
          <li className="border border-black p-2 mb-2 rounded" key={todo.id}>
            <div>Titre: {todo.title}</div>
            <div>Contenu: {todo.content}</div>
            <button onClick={() => dispatch(toggleTodo(todo.id))}>{todo.done ? <AiOutlineCheckSquare /> : <MdCheckBoxOutlineBlank />}</button>
            <button onClick={() => dispatch(deleteTodo(todo.id))}><MdDelete /></button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TodoContainer;
