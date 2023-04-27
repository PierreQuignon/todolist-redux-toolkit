import { FC, useState } from "react";
import { Todo as todoType } from "../App";
import { HiPlusCircle } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { addTodo } from "./Redux"

interface ITodoProps {
  todo: todoType;
}

const TodoAdder: FC<ITodoProps> = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const dispatch = useDispatch();

  return (
    <div className="border border-black flex flex-col p-5 rounded">
      <label>
        Titre
        <input
          className="border border-black p-2 m-2 rounded"
          type="text"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </label>
      <label>
        Content :
        <input
          className="border border-black p-2 m-2 rounded"
          type="text"
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
      </label>
      <button
        className="border border-black rounded hover:bg-slate-300"
        onClick={() => dispatch(addTodo({title, content}))}
      >
        <div className="flex">
          <HiPlusCircle />
          Soumettre
        </div>
      </button>
    </div>
  );
};

export default TodoAdder;
