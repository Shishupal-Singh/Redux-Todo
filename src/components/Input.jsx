import React, { useState } from 'react'
import {useDispatch,useSelector} from "react-redux"
import uuid from 'react-uuid'
import { addTodo,updateTodo } from '../actions';


const Input = ({value,setvalue,isEdit,setisEdit}) => {
    // const [value,setvalue]=useState("");
    
    const dispatch=useDispatch()
    
    const onChangehandler=(e)=>{
    const newTodo=e.target.value;

    setvalue(newTodo)
    }


    const submithandler=(e)=>{
        e.preventDefault();
        
        if(isEdit.editId){
            const updated_Todo={todo:value,id:isEdit.editId};
            dispatch(updateTodo(updated_Todo,isEdit.editId));
           setisEdit({edit:false,editId:null});

        }
        else{
            const newtodo={todo:value,id:uuid()}
            dispatch(addTodo(newtodo))
            
        }
        setvalue("")
    }

    return (
        <div>
            <form onSubmit={submithandler}>
                <input type="text" placeholder="Enter a todo item..." value={value} 
                onChange={onChangehandler}/>
            </form>
            
        </div>
    )
}

export default Input
