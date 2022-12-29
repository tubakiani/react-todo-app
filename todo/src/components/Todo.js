import React from 'react'

function Todo({todo,toggleComplete,removeTodo}) {

  const changeHandler = () =>{
    toggleComplete(todo.id)
  }

  const clickHandler = () =>{
    removeTodo(todo.id);
  }

  return (
    <div className='todo'>
      <div className='todo-list'>
        <li>
          {todo.task}
        </li>
        <input type="checkbox" onChange={changeHandler}/>
        <button onClick={clickHandler}>x</button>
      </div>
    </div>
  )
}

export default Todo;