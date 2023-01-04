import axios from "axios"
const baseApiUrl =
  process.env.NODE_ENV === "production"
    ? "/api/v1"
    : process.env.REACT_APP_ROOT_URL

const userEp = baseApiUrl + "/user"

export const postNewUser = async (userData) => {
  try {
    const { data } = await axios.post(userEp, userData)
    return data
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    }
  }
}

export const loginUser = async (userData) => {
  try {
    const { data } = await axios.post(userEp + "/login", userData)
    return data
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    }
  }
}
