import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isLoading: false,
  books: [],
  error: {},
  response: {},
  borrowedBooks: [],
}

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    requestPending: (state) => {
      state.isLoading = true
    },
    getBookSuccess: (state, action) => {
      state.isLoading = false
      state.books = action.payload
    },
    getBorrowedBooksSuccess: (state, { payload }) => {
      state.isLoading = false
      state.borrowedBooks = payload
    },
    requestSuccess: (state, { payload }) => {
      state.isLoading = false
      state.response = payload
    },
    requestFailed: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export const { actions, reducer } = bookSlice

export const {
  requestPending,
  requestFailed,
  getBookSuccess,
  getBorrowedBooksSuccess,
  requestSuccess,
} = actions

export default reducer
