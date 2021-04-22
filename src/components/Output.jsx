import React from 'react'
import { useSelector } from 'react-redux'
import Todo from './Todo'


const Output = ({value,setvalue,setisEdit}) => {
    const todos=useSelector(state=>state.todoReducers)
   
    return (
        <div>
          {
              todos.map(ele=>{
                return <Todo {...ele} key={ele.id} setvalue={setvalue} setisEdit={setisEdit}/>
              })
          }
        </div>
    )
}

export default Output
