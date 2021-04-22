import React, { useState } from 'react'
import {useDispatch} from "react-redux"
import { deleteTodo } from '../actions'
import Moment from 'react-moment';
// import 'moment-timezone';
import "../cssfiles/Todo.css"

const Todo = ({todo,id,setvalue,setisEdit}) => {
    const [checked,setchecked]=useState(false)
    const dispatch=useDispatch()
     
    const handleDelete=(id)=>{
     dispatch(deleteTodo(id))
    }

    const updateHandler=(id)=>{
       setvalue(todo)
       setisEdit({edit:true,editId:id})
    }

    const completeHandler=(id)=>{
        setchecked(prev=>!prev)
    }

    return (
        <div>
            <h2 className={checked?"checked":""}>{todo}</h2>
            <Moment parse="YYYY-MM-DD HH:mm">
                {new Date()}
            </Moment>
            <button onClick={()=>completeHandler(id)}>done</button>
            <button onClick={()=>handleDelete(id)}>delete</button>
            <button onClick={()=>updateHandler(id)}>update</button>
        </div>
    )
}

export default Todo
