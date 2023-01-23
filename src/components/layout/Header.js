import { Container, Nav, Navbar } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { userLogout } from "../../redux/User/UserAction"

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { userInfo } = useSelector((state) => state.user)

  const handleLogout = () => {
    dispatch(userLogout())
    navigate("/login")
  }

  return (
    <Navbar bg="warning" expand="md">
      <Container>
        <Navbar.Brand href="/">Library Mgmt.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {userInfo?._id ? (
              <div className="d-flex align-items-center gap-2">
                <div>
                  Welcome Back{" "}
                  <span className="fw-bold"> {userInfo?.fName}</span>!
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
