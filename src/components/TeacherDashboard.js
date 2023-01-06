import Books from "./books/Books"
import DashboardLayout from "./layout/DashboardLayout"

const TeacherDashboard = ({ user }) => {
  return (
    <DashboardLayout user={user}>
      <Books user={user} />
    </DashboardLayout>
  )
}

export default TeacherDashboard
