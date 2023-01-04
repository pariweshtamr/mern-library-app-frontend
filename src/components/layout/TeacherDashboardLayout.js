import React from "react"
import Sidebar from "../sidebar/Sidebar"
import Footer from "./Footer"
import Header from "./Header"

const TeacherDashboardLayout = ({ children }) => {
  return (
    <div className="teacher-layout">
      <Sidebar />
      <div className="dashboard-main">
        <Header />
        <div className="content">{children}</div>
        <Footer />
      </div>
    </div>
  )
}

export default TeacherDashboardLayout
