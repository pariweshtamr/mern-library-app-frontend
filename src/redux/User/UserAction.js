import { toast } from "react-toastify"
import { loginUser } from "../../helpers/axiosHelper"
import { loginSuccess, requestFail, requestPending } from "./UserSlice"

export const loginAction = (form) => async (dispatch) => {
  try {
    //set Loader
    dispatch(requestPending())

    // call axios

    const { status, message, user } = await loginUser(form)

    status === "success"
      ? dispatch(loginSuccess(user)) && toast[status](message)
      : dispatch(requestFail(message)) && toast[status](message)
  } catch (error) {
    dispatch(requestFail(error))
  }
}
