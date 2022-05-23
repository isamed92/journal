
import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from '../reducers/authReducer'


const store = configureStore({
  reducer: {
    // Define a top-level state field named `todos`, handled by `todosReducer`
   auth: authReducer
  }
})

export default store