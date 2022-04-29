import React from 'react'

const Todo = ({id , value}) => {
    const handleDelete=async()=>{
        let res = await fetch(`http://localhost:8080/todos/${id}`,{
            method:"DELETE",
            headers:{
                "content-type" : "application/json",
            },
        });
      
       
    };
  return (
    <div style={{display:"flex", justifyContent:"center", gap:"10px", marginTop:"10px"}}>
        <div>{value}</div>
        <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default Todo