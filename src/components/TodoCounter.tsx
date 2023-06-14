import { useSelector } from 'react-redux';
import { RootState } from './Redux';
import "../style/TodoCounter.css"


const TodoCounter = () => {
  const todos = useSelector((state: RootState) => state.todo);
  const todosLength = todos.length

  return (
    <div>
      <p className='todo-counter'>Nombre de tâches:  {todosLength}</p>
    </div>
   );
};

export default TodoCounter;
