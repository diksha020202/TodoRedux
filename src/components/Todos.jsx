import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from '../store/actions';
import Todo from './Todo';
import TodoInput from './TodoInput';



const Todos = () => {
   const todos =useSelector(state=>state.todos);
   const dispatch = useDispatch();

    useEffect(()=>{
        getTodos(dispatch);
    },[])
  return (
    <div>Todos:{todos.length-1}
    <div>
        <TodoInput/>
     </div>
     {todos.map((todo)=>(
     <Todo key ={todo.id} {...todo}/>
     ))}
        </div>
  )
}

export default Todos