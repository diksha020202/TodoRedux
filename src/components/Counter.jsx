import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incrementCounter } from '../store/actions';
import { decrementCounter } from '../store/actions';

const Counter = () => {
    const count=useSelector((state)=>state.count);
    const dispatch =useDispatch();

  return (
    <div>Counter:{count}
    <div style={{marginTop: "60px"}}>
    <button onClick={()=>dispatch(incrementCounter(1))}>Increment</button>
    <button onClick={()=>dispatch(decrementCounter(2))}>Decrement</button>
    </div>

    <div style={{marginTop: "60px"}}>
    <button onClick={()=>dispatch(incrementCounter(5))}>Increment by 5</button>
    <button onClick={()=>dispatch(decrementCounter(20))}>Decrement by 20</button>
    </div>
    
    </div>
  )
}

export default Counter;