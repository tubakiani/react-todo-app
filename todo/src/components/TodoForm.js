import React ,{ useState } from 'react'
import {v4} from 'uuid';
import styles from './Todomodule.css'

function TodoForm({addTodo}) {
    const[todo , setTodo] = useState({
        id:"",
        task:"",
        completed:false
    });

    const submitHandler = event =>{
        event.preventDefault();
        if(todo.task.trim()){
            addTodo({ ...todo, id: {v4}});
            setTodo({...todo, task:""})
        }
    }
     
    const changeHandler = event =>{
        setTodo({...todo, task:event.target.value});
    }

  return (
    <form className='todoform' onSubmit={submitHandler}>
        <input  type="text" value={todo.task} placeholder="Enter todo" onChange={changeHandler}/>
        <button type='submit'>Add Task</button>
    </form>
  )
}

export default TodoForm;