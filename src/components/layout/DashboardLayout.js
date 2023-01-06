import React, { useEffect, useState } from "react"
import Sidebar from "../sidebar/Sidebar"
import Footer from "./Footer"
import Header from "./Header"

const DashboardLayout = ({ children }) => {
  const [user, setUser] = useState({})
  useEffect(() => {
    const u = JSON.parse(sessionStorage.getItem("user"))
    setUser(u)
  }, [])
  return (
    <div className="teacher-layout">
      <Sidebar user={user} />
      <div className="dashboard-main">
        <Header />
        <div className="content">{children}</div>
        <Footer />
      </div>
    </div>
  )
}

export default DashboardLayout
