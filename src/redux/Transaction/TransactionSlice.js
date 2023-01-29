import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isLoading: false,
  error: {},
  response: {},
  transactions: [],
}

const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    requestPending: (state) => {
      state.isLoading = true
    },
    getTransactionsSuccess: (state, { payload }) => {
      state.isLoading = false
      state.transactions = payload
      state.error = {}
    },
    requestFailed: (state, { payload }) => {
      state.isLoading = false
      state.error = payload
    },
  },
})

const { actions, reducer } = transactionSlice

export const { requestPending, getTransactionsSuccess, requestFailed } = actions

export default reducer
