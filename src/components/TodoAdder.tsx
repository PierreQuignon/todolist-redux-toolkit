import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./Redux";
import "../style/TodoAdder.css"

const TodoAdder = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const dispatch = useDispatch();

  return (
    <div className="container-adder">
      <input
        placeholder="Titre de la tâche"
        className="border border-black p-2 m-2 rounded"
        type="text"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input
        placeholder="Contenu de la tâche"
        className="border border-black p-2 m-2 rounded"
        type="text"
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
      <button onClick={() => dispatch(addTodo({ title, content }))}>
        <div className="button-add">
          Ajouter
        </div>
      </button>
    </div>
  );
};

export default TodoAdder;
