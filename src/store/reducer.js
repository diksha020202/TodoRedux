import { INCREMENT, DECREMENT, GET_TODOS } from "./actionTypes";
export const reducer =(state, action )=> {
   switch(action.type){
       case INCREMENT :{
           return{
               ...state,
               count:state.count+action.payload,
           }
       }
       case DECREMENT: {
       return{
           ...state,
           count:state.count-action.payload,
       }
    }

    case GET_TODOS : {
        return{
            ...state,
            todos:action.payload,
        }
    }
    default:{
     return state;
    }
   }
}