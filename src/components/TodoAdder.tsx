import { FC, useState } from "react";
import { HiPlusCircle } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { addTodo } from "./Redux"



const TodoAdder: FC = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const dispatch = useDispatch();

  return (
    <div className="border border-black flex flex-col p-5 rounded">
      <label>
        Titre de la tâche:
        <input
          className="border border-black p-2 m-2 rounded"
          type="text"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </label>
      <label>
        Contenu de la tâche:
        <input
          className="border border-black p-2 m-2 rounded"
          type="text"
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
      </label>
      <button
        onClick={() => dispatch(addTodo({title, content}))}
      >
        <div className="flex justify-center">
          <HiPlusCircle className="w-8"/>Ajouter
        </div>
      </button>
    </div>
  );
};

export default TodoAdder;
