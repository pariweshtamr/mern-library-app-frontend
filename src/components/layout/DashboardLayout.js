import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import Sidebar from "../sidebar/Sidebar"
import Footer from "./Footer"
import Header from "./Header"

const DashboardLayout = ({ children }) => {
  // const [user, setUser] = useState({})
  const { userInfo } = useSelector((state) => state.user)
  // useEffect(() => {
  //   const u = JSON.parse(sessionStorage.getItem("user"))
  //   setUser(u)
  // }, [])

  useEffect(() => {}, [])

  return (
    <div className="teacher-layout">
      <Sidebar user={userInfo} />
      <div className="dashboard-main">
        <Header />
        <div className="content">{children}</div>
        <Footer />
      </div>
    </div>
  )
}

export default DashboardLayout
