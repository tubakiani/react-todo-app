import React from 'react'

function Todo({todo,toggleComplete,removeTodo}) {

  const changeHandler = () =>{
    toggleComplete(todo.id)
  }

  const clickHandler = () =>{
    removeTodo(todo.id);
  }

  return (
    <div>
      <input type="checkbox" onChange={changeHandler}/>
      <li>
        {todo.task}
      </li>
      <button onClick={clickHandler}>x</button>
    </div>
  )
}

export default Todo;