import axios from "axios"
const baseApiUrl =
  process.env.NODE_ENV === "production"
    ? "/api/v1"
    : process.env.REACT_APP_ROOT_URL

const userEp = baseApiUrl + "/user"
const bookEp = baseApiUrl + "/book"

// USER

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

export const borrowBook = async (bookId, userId) => {
  try {
    const { data } = await axios.post(userEp + "/borrow", { bookId, userId })
    return data
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    }
  }
}

export const returnBook = async (bookId, userId) => {
  try {
    const { data } = await axios.patch(userEp + "/return", { bookId, userId })
    return data
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    }
  }
}

export const getBooksBorrowed = async (userId) => {
  try {
    const { data } = await axios.get(
      userEp + "/borrowed-books",

      {
        headers: {
          authorization: userId,
        },
      }
    )
    return data
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    }
  }
}

// BOOK

export const addBook = async (bookInfo) => {
  try {
    const { data } = await axios.post(bookEp, bookInfo)
    return data
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    }
  }
}

export const getBooks = async () => {
  try {
    const { data } = await axios.get(bookEp)
    return data
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    }
  }
}

export const deleteBooks = async (ids) => {
  try {
    const { data } = await axios.delete(bookEp, {
      data: ids,
    })
    return data
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    }
  }
}

// RANSACTION
