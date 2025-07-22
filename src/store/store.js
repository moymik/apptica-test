import {configureStore} from '@reduxjs/toolkit'
import {counterSlice} from "./counter/counterSlice.js";

export default configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
})