// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     todosList:[]
// }

// export const todoSlice = createSlice({
//     name: "todos",
//     initialState,
//         reducers:{
//             addTodos: (state, action)=>{
//                 state.todosList = action.payload
//             }
//     }
// })

// export const {addTodos} = todoSlice.actions
// export default todoSlice.reducer


const initialState = {
    todos : []
}
function addtodo(params) {
    initialState.todos.push(params)
}
export default (state = initialState, { type, payload }) => {
  switch (type) {
  case "ADD_TODO":
    return { 
        ...state,
        ...addtodo(payload) 
    }

  default:
    return state
  }
}
