import { getAllTransactions } from "../../helpers/axiosHelper"
import {
  getTransactionsSuccess,
  requestFailed,
  requestPending,
} from "./TransactionSlice"

export const getTransactionsAction = () => async (dispatch) => {
  try {
    dispatch(requestPending())

    const transactions = await getAllTransactions()

    transactions
      ? dispatch(getTransactionsSuccess(transactions))
      : dispatch(
          requestFailed({
            status: "error",
            message: "Unable to get transactions!",
          })
        )
  } catch (error) {
    dispatch(requestFailed(error))
  }
}
