import "./App.css"
import { ToastContainer } from "react-toastify"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import AddBook from "./pages/AddBook"
import { useEffect, useState } from "react"
import MyBooks from "./pages/MyBooks"
import Transactions from "./pages/Transactions"
import Books from "./pages/Books"
import Profile from "./pages/Profile"
import { useSelector } from "react-redux"

function App() {
  const [user, setUser] = useState({})
  useEffect(() => {
    const u = JSON.parse(sessionStorage.getItem("user"))
    setUser(u)
  }, [])

  const { isLoggedIn, userInfo } = useSelector((state) => state.user)

  // const RequireAuth = ({ children }) => {
  //   return user?._id ? children : <Navigate to="/" />
  // }

  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={isLoggedIn ? <Books /> : <Login />} />
            <Route path="register" element={<Register />} />

            <Route path="books">
              <Route index element={<Books />} />
              <Route
                path="add"
                element={isLoggedIn ? <AddBook /> : <Login />}
              ></Route>
            </Route>

            <Route
              exact
              path="mybooks"
              element={isLoggedIn ? <MyBooks user={user} /> : <Login />}
            ></Route>

            <Route
              path="transactions"
              element={isLoggedIn ? <Transactions /> : <Login />}
            />
            <Route
              path="profile"
              element={isLoggedIn ? <Profile currentUser={user} /> : <Login />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
