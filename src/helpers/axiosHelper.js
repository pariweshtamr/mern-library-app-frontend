import axios from "axios"
const baseApiUrl =
  process.env.NODE_ENV === "production"
    ? "/api/v1"
    : process.env.REACT_APP_ROOT_URL

const userEp = baseApiUrl + "/user"
const bookEp = baseApiUrl + "/book"
const transactionEp = baseApiUrl + "/transaction"

// USER

// get user from sessionStorage

export const getUser = async () => {
  try {
    const userId = getUserFromSessionStorage()
    if (!userId) {
      return {
        status: "error",
        message: "Please login first",
      }
    }
    const { data } = await axios.get(userEp, {
      headers: {
        Authorization: userId,
      },
    })
    return data
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    }
  }
}

const getUserFromSessionStorage = () => {
  const user = JSON.parse(sessionStorage.getItem("user"))
  if (user) {
    return user?._id
  }
  return
}

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

export const editUserInfo = async (userData) => {
  try {
    const userId = getUserFromSessionStorage()
    if (!userId) {
      return {
        status: "error",
        message: "Please login first",
      }
    }
    const { data } = await axios.patch(userEp, userData, {
      headers: {
        Authorization: userId,
      },
    })
    return data
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    }
  }
}

export const passUpdate = async (userData) => {
  try {
    const userId = getUserFromSessionStorage()
    if (!userId) {
      return {
        status: "error",
        message: "Please login first",
      }
    }

    const { data } = await axios.patch(userEp + "/password-update", userData, {
      headers: {
        Authorization: userId,
      },
    })
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
    const userId = getUserFromSessionStorage()
    if (!userId) {
      return {
        status: "error",
        message: "Please login first!",
      }
    }
    const { data } = await axios.post(bookEp, bookInfo, {
      headers: {
        Authorization: userId,
      },
    })
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
    const userId = getUserFromSessionStorage()
    if (!userId) {
      return {
        status: "error",
        message: "Please log in first!",
      }
    }
    const { data } = await axios.get(bookEp, {
      headers: {
        Authorization: userId,
      },
    })
    return data
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    }
  }
}

export const borrowBook = async (bookId) => {
  try {
    const userId = getUserFromSessionStorage()

    if (!userId) {
      return {
        status: "error",
        message: "Please login first!",
      }
    }
    const { data } = await axios.post(
      bookEp + "/borrow",
      { bookId },
      {
        headers: { Authorization: userId },
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

export const returnBook = async (bookId) => {
  try {
    const userId = getUserFromSessionStorage()
    if (!userId) {
      return {
        status: "error",
        message: "Please login first!",
      }
    }
    const { data } = await axios.patch(
      bookEp + "/return",
      {
        bookId,
      },
      {
        headers: { Authorization: userId },
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

export const getBooksBorrowed = async () => {
  try {
    const userId = getUserFromSessionStorage()
    if (!userId) {
      return {
        status: "error",
        message: "Please log in first!",
      }
    }
    const { data } = await axios.get(bookEp + "/borrowedByUser", {
      headers: {
        Authorization: userId,
      },
    })
    return data
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    }
  }
}

export const getAllBorrowedBooks = async () => {
  try {
    const userId = getUserFromSessionStorage()
    if (!userId) {
      return {
        status: "error",
        message: "Please log in first!",
      }
    }

    const { data } = await axios.get(bookEp + "/allBorrowedBooks", {
      headers: {
        Authorization: userId,
      },
    })
    return data
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    }
  }
}

export const deleteABook = async (_id) => {
  try {
    const userId = getUserFromSessionStorage()

    if (!userId) {
      return {
        status: "error",
        message: "Please login first!",
      }
    }
    const { data } = await axios.delete(bookEp + "/delete", {
      data: { _id },
      headers: {
        Authorization: userId,
      },
    })
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
    const userId = getUserFromSessionStorage()
    if (!userId) {
      return {
        status: "error",
        message: "Please log in first!",
      }
    }
    const { data } = await axios.delete(bookEp, {
      data: ids,
      headers: {
        Authorization: userId,
      },
    })
    return data
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    }
  }
}

// TRANSACTIONS

export const getAllTransactions = async () => {
  try {
    const userId = getUserFromSessionStorage()
    if (!userId) {
      return {
        status: "error",
        message: "Please login first!",
      }
    }
    const { data } = await axios.get(transactionEp, {
      headers: {
        Authorization: userId,
      },
    })

    return data
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    }
  }
}
