import React from 'react';
import Todo from './Todo';


function TodoList({todos,toggleComplete,removeTodo}) {
  return (
    <ol>
      {todos.map(todo => (
        <Todo key={todo.id} 
        todo={todo} 
        toggleComplete={toggleComplete} 
        removeTodo={removeTodo}/> 
      ))}
    </ol>
  )
}

export default TodoList