import {ADD_TODO,DELETE_TODO,UPDATE_TODO} from "../constants"
const todoReducers=(state=[],action)=>{
    
    switch(action.type){
        case ADD_TODO:
            return [...state,{...action.payload}]
        
        case DELETE_TODO:
            return state.filter(todo=>todo.id !==action.payload)

        case UPDATE_TODO:
            return state.map(todo=>{
            return (todo.id===action.payload.id?action.payload.updatedTodo:todo)
            })

        default:
            return state
    }
}

export default todoReducers