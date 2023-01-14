import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./redux/User/UserSlice"

const store = configureStore({
  reducer: {
    user: userReducer,
  },
})

export default store
