import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isLoading: false,
  isLoggedIn: sessionStorage.getItem("user") ? true : false,
  error: {},
  userInfo: sessionStorage.getItem("user")
    ? JSON.parse(sessionStorage.getItem("user"))
    : {},
  response: {},
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    requestPending: (state) => {
      state.isLoading = true
    },
    getUserSuccess: (state, { payload }) => {
      state.isLoading = false
      state.userInfo = payload
      sessionStorage.setItem("user", JSON.stringify(payload))
    },
    loginSuccess: (state, action) => {
      state.isLoading = false
      state.userInfo = action.payload
      state.error = {}
      state.isLoggedIn = true
      sessionStorage.setItem("user", JSON.stringify(action.payload))
    },
    logoutSuccess: (state) => {
      state.isLoading = false
      state.isLoggedIn = false
      state.userInfo = {}
      state.error = {}
      sessionStorage.removeItem("user")
    },
    loginAuto: (state) => {
      state.isLoggedIn = true
      state.isLoading = false
    },
    registerSuccess: (state, action) => {
      state.isLoading = false
      state.response = action.payload
    },
    requestFail: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
    requestSuccess: (state, { payload }) => {
      state.isLoading = false
      state.response = payload
      state.error = {}
    },
  },
})

const { reducer, actions } = userSlice

export const {
  requestPending,
  requestFail,
  registerSuccess,
  loginSuccess,
  logoutSuccess,
  loginAuto,
  requestSuccess,
  getUserSuccess,
} = actions

export default reducer
