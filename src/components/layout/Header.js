import { useEffect, useState } from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const Header = () => {
  const [user, setUser] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    const u = JSON.parse(sessionStorage.getItem("user"))
    setUser(u)
  }, [])

  const handleLogout = () => {
    sessionStorage.removeItem("user")
    navigate("/")
  }

  return (
    <Navbar bg="warning" expand="md">
      <Container>
        <Navbar.Brand href="/">Library Mgmt.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {user?._id ? (
              <div className="d-flex align-items-center gap-2">
                <div>
                  Welcome Back <span className="fw-bold"> {user?.fName}</span>!
                </div>
                <Nav.Link to="/" onClick={handleLogout}>
                  Logout
                </Nav.Link>
              </div>
            ) : (
              <>
                <Nav.Link href="/login">
                  <i className="fa-solid fa-user"></i> Login
                </Nav.Link>
                <Nav.Link href="/register">
                  <i className="fa-solid fa-pen-to-square"></i> Sign Up
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
