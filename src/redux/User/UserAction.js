import { toast } from "react-toastify"
import {
  editUserInfo,
  getUser,
  loginUser,
  passUpdate,
  postNewUser,
} from "../../helpers/axiosHelper"
import {
  getUserSuccess,
  loginAuto,
  loginSuccess,
  logoutSuccess,
  registerSuccess,
  requestFail,
  requestPending,
  requestSuccess,
} from "./UserSlice"

export const getUserAction = () => async (dispatch) => {
  try {
    const user = await getUser()
    user._id
      ? dispatch(getUserSuccess(user))
      : dispatch(requestFail({ status: "error", message: "User not found!" }))
  } catch (error) {
    dispatch(requestFail(error))
  }
}

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

export const editProfileAction = (form) => async (dispatch) => {
  try {
    dispatch(requestPending())

    const { status, message } = await editUserInfo(form)

    status === "success"
      ? dispatch(requestSuccess({ status, message })) &&
        toast[status](message) &&
        dispatch(getUserAction())
      : dispatch(requestFail({ status, message })) && toast[status](message)
  } catch (error) {
    dispatch(requestFail(error))
  }
}

export const updatePasswordAction = (form) => async (dispatch) => {
  try {
    dispatch(requestPending())

    const { status, message } = await passUpdate(form)

    status === "success"
      ? dispatch(requestSuccess({ status, message })) && toast[status](message)
      : dispatch(requestFail({ status, message })) && toast[status](message)
  } catch (error) {
    dispatch(requestFail(error))
  }
}
