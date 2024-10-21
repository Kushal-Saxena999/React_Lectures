import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
  name: 'counter',
  initialState : {
    value : 0 ,
  },
  reducers : {
    increment : (state, action) => {
      // console.log("hello");
      // console.log(JSON.stringify(state));
      console.log(action.payload);

      state.value = state.value + 1


    },
    decrement : (state, action) => {
      console.log(action.payload);

      state.value = state.value - 1
    },
    Reset : (state, action) => {
      console.log(action.payload);

      state.value = 0;
    }
  }



  // name: 'todo',
  // initialState : {
  //   todos : [] ,
  // },
  // reducers : {
  //   addTodo : (state, action) => {
  //     let todo = {id : 1, title : action.payload}
  //     state.todos.push(todo)
  //   },
  //   addTodo : () => {},
  //   updateTodo : () => {},
  //   deleteAllTodo : () => {},
  //   markAsReadTodo : () => {},
  //   deleteTodo : () => {}
  // }

})

export const { increment , decrement , Reset} = counterSlice.actions

export default counterSlice.reducer