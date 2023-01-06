import "./App.css"
import { ToastContainer } from "react-toastify"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"
import AddBook from "./pages/AddBook"
import { useEffect, useState } from "react"
import MyBooks from "./pages/MyBooks"

function App() {
  const [user, setUser] = useState({})
  useEffect(() => {
    const u = JSON.parse(sessionStorage.getItem("user"))
    setUser(u)
  }, [])
  // const RequireAuth = ({ children }) => {
  //   return user?._id ? children : <Navigate to="/" />
  // }

  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Login />} />
            <Route path="register" element={<Register />} />

            <Route path="books">
              <Route index element={<Dashboard />} />
              <Route
                path="add"
                element={user?._id && <AddBook user={user} />}
              ></Route>
            </Route>

            <Route
              exact
              path="mybooks"
              element={<MyBooks user={user} />}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
