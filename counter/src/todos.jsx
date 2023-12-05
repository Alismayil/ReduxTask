import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
import { addTodo, deleteTodo, editTodo } from './todoSlice';


const Todos = () => {
    const [input, setInput] = useState("")
    const [editId, setEditId] = useState(null)
    const todos=useSelector(state=>state.todos)
    const dispatch=useDispatch()

    const handleAddTodo=()=>{               
        if(!input) return;
        dispatch(addTodo({
            id:uuidv4(),
            text:input,
        }))
    }

    const handleSave=()=>{
        dispatch(editTodo({
            id:editId,
            text:input

        }))
        setInput("")
        setEditId(null)
    }

    const handleEdit=(todo)=>{
        setInput(todo.text)
        setEditId(todo.id)
    }   

    const handelDelete=(id)=>{
        dispatch(deleteTodo(id))
    }







  return (
    <div>
        <input type="text" value={input}  onChange={(e)=>setInput(e.target.value)} />
            {editId ? <button onClick={handleSave}>Save</button> : <button onClick={handleAddTodo}>Add</button>}
        <ul>    
            {
            todos.map((todo)=>(
                    <li style={{display:"flex"}} key={todo.id}>{todo.text}
                    <button onClick={()=>handleEdit(todo)}>Edit</button>
                    <button onClick={()=>handelDelete(todo.id)}>Delete</button>
                    </li>
                ))
            }
        </ul>



    </div>
  )
}

export default Todos