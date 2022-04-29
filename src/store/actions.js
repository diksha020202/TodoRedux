import { DECREMENT, GET_TODOS, INCREMENT } from "./actionTypes";

export const incrementCounter=(payload)=>({
type: INCREMENT,
payload,
})

export const decrementCounter=(payload)=>({
    type: DECREMENT,
    payload,
    })

    export const getTodos=async( dispatch)=>{
        let r=await fetch(" http://localhost:8080/todos");
        let d = await r.json();
     dispatch({
            type:GET_TODOS,
            payload:d,
        })
           
    }
    