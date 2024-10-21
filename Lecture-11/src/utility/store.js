import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";


const store = configureStore({
  reducer : {
    counter : counterSlice,
    counter1 : counterSlice,
    counter2: counterSlice,
    counter3 : counterSlice,
    counter4 : counterSlice
  }
})

export default store