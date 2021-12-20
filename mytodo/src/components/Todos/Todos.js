import React ,{useState}from 'react';
import { useSelector ,useDispatch} from 'react-redux';
import Update from '../Update';
import{BiCalendarX , BiCalendarCheck} from 'react-icons/bi'
import './Todos.css'

const Todos = () => {
    const dispatch = useDispatch()
    const tasks = useSelector(state => state.reducer.tasks)
    const [sort, setSort] = useState("all")
    const TaskIsDone = (id) =>{
        dispatch({type: "done",payload:id})
      }
    return (
        <div>
            <div className='displayTodos'>
            <div className='Buttons'>
            <button onClick={()=>setSort("all")}>All</button>
            <button onClick={()=>setSort("active")}>Active</button>
            <button onClick={()=>setSort("completed")}>Completed</button>
            </div>
            </div>
            
             <div className='container'>
             <ul className='taskList'>
            {(sort==="completed"?tasks.filter(task=>task.isDone===true) : sort==="active" ?tasks.filter(task=>task.isDone===false) : tasks).map((task,i)=>{
                return(
            
                <li key={i} className='card'>
                    <span style={task.isDone ?{textDecoration: "line-through"} : {}}>{task.description}</span>
                    <div className='btns'>
                    <Update taskDesc={task.description} newId={task.id}/>
                    <button  style={{color:'green'} } onClick={()=>TaskIsDone(task.id)} ><BiCalendarCheck/></button>

                    <button  style={{color:'red'}}onClick={()=>dispatch({type:"delete",payload:task.id})}><BiCalendarX/></button>
                    
                    
                    </div>
                    </li>
                )
            })}
            </ul>
            </div>
           
           
           
        </div>
    )
}

export default Todos;
