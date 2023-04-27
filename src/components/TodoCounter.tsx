import * as React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './Redux';


const TodoCounter: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todo);
  const todosLength = todos.length

  return (
    <div>
      <p className='border border-black flex flex-col justify-center p-5 rounded h-5'>Nombre de tâches :{todosLength}</p>
    </div>
   );
};

export default TodoCounter;
