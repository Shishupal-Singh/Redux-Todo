import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "../constants"

export const addTodo=(todo)=>{
    return{
        type:ADD_TODO,
        payload:todo
    }
}

export const deleteTodo=(id)=>{
    return{
        type:DELETE_TODO,
        payload:id
    }
}

export const updateTodo=(updatedTodo,id)=>{
    return{
        type:UPDATE_TODO,
        payload:{
            updatedTodo,id
        }
    }
}