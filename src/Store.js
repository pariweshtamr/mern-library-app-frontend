import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./redux/User/UserSlice"
import bookReducer from "./redux/Book/BookSlice"

const store = configureStore({
  reducer: {
    user: userReducer,
    book: bookReducer,
  },
})

export default store
