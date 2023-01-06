import { useEffect, useState } from "react"
import Books from "../components/books/Books"
import DashboardLayout from "../components/layout/DashboardLayout"

const Dashboard = () => {
  const [user, setUser] = useState({})
  useEffect(() => {
    const u = JSON.parse(sessionStorage.getItem("user"))
    setUser(u)
  }, [])
  return (
    <>
      <DashboardLayout>
        <Books user={user} />
      </DashboardLayout>
    </>
  )
}

export default Dashboard
