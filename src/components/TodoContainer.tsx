import * as React from "react";
import { useSelector } from "react-redux";
import { Todo as todoType } from "../App";

interface ITodoProps {
  todo: todoType;
}

const TodoContainer: React.FC<ITodoProps> = () => {
  const todos = useSelector((state: todoType[]) => state.todo);

  return (
    <div className='flex flex-col'>
      <ul>
        {todos.map((todo: todoType) => (
          <li className="border border-black p-2 mb-2 rounded" key={todo.id}>
            <div>{todo.content}</div>
            <div>titre: {todo.title}</div>
            <div>contenu: {todo.content}</div>
            <div>fait: {todo.done ? 'oui' : 'non'}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TodoContainer;
