import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {GoPlus} from 'react-icons/go'
import'./AddTask.css'
const AddTask = () => {
    const dispatch = useDispatch()
    const [todo, setTodo] = useState("")
    const handleChange=(e)=>{
        setTodo(e.target.value)
    }
    const addFunc=()=>{
        if(todo.trim()){
            dispatch({type:'add',payload:todo})
            setTodo('')
        }else alert('Input is empty')
    }
    //console.log("todo text",todo)
    return (
        <div className='addTodos'>
            <input type="text"  onChange={(e)=>handleChange(e)} className='todo-input' value={todo} maxLength={60} placeholder='     add new Task...'/>
            <button className='add-btn' onClick={addFunc}><GoPlus/></button>
        </div>
    )
}

export default AddTask;
