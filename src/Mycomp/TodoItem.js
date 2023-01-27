import React from "react";

export default function TodoItem({ todo ,onDelete}) {
  return (
    <div>
      {/* <h3>{todo.sno}</h3> */}
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button> 
      <hr/>
     { /*arrow function called at array.size() times but can't do anything just pass the func onDelete not call it but at time of clicking then function onDelete call*/}
    </div>
  );
}