import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isLoading: false,
  isLoggedIn: false,
  error: {},
  userInfo: sessionStorage.getItem("user")
    ? JSON.parse(sessionStorage.getItem("user"))
    : {},
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    requestPending: (state) => {
      state.isLoading = true
    },
    loginSuccess: (state, action) => {
      state.isLoading = false
      state.userInfo = action.payload
      state.error = {}
      state.isLoggedIn = true
      sessionStorage.setItem("user", JSON.stringify(action.payload))
    },
    logoutSuccess: (state, action) => {
      sessionStorage.removeItem("user")
      state.isLoading = false
      state.userInfo = {}
      state.error = {}
    },
    registerSuccess: (state, action) => {
      state.isLoading = false
      state.response = action.payload
    },
    requestFail: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

const { reducer, actions } = userSlice

export const { requestPending, requestFail, loginSuccess, logoutSuccess } =
  actions

export default reducer