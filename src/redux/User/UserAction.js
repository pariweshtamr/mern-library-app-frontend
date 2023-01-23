import { toast } from "react-toastify"
import { loginUser, postNewUser } from "../../helpers/axiosHelper"
import {
  loginAuto,
  loginSuccess,
  logoutSuccess,
  registerSuccess,
  requestFail,
  requestPending,
} from "./UserSlice"

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

export const registerAction = (form) => async (dispatch) => {
  try {
    dispatch(requestPending())

    const { status, message } = await postNewUser(form)

    status === "success"
      ? dispatch(registerSuccess({ status, message })) && toast[status](message)
      : dispatch(requestFail(message)) && toast[status](message)
  } catch (error) {
    dispatch(requestFail(error))
  }
}

export const autoLogin = () => async (dispatch) => {
  dispatch(requestPending())

  const user = sessionStorage.getItem("user")

  if (user) {
    dispatch(loginAuto())
    return
  }
}

export const userLogout = () => async (dispatch) => {
  dispatch(logoutSuccess())
}