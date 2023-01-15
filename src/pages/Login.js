import DefaultLayout from "../components/layout/DefaultLayout"
import { useNavigate } from "react-router-dom"
import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap"
import InputField from "../components/inputField/InputField"
import { useEffect, useState } from "react"
import { loginUser } from "../helpers/axiosHelper"
import { toast } from "react-toastify"
import { useDispatch, useSelector } from "react-redux"
import { loginAction } from "../redux/User/UserAction"

const Login = () => {
  const [form, setForm] = useState({})
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isLoggedIn, isLoading } = useSelector((state) => state.user)

  useEffect(() => {
    isLoggedIn && navigate("/")
  }, [isLoggedIn, navigate])

  const handleOnChange = (e) => {
    const { name, value } = e.target

    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    dispatch(loginAction(form))
    // const { status, message, user } = await loginUser(form)

    // if (status === "success") {
    //   toast[status](message)
    //   sessionStorage.setItem("user", JSON.stringify(user))
    //   navigate("/books")
    // } else {
    //   toast[status](message)
    // }
  }

  const inputs = [
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Sam@email.com",
      required: true,
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "*******",
      required: true,
    },
  ]
  return (
    <DefaultLayout>
      <Container>
        <Row className="mt-5">
          <Col className="bg-warning p-5">
            <div className="bg-light p-4 rounded">
              <Form onSubmit={handleOnSubmit}>
                <h2 className="text-center">Login</h2>
                <hr />

                {inputs.map((input, i) => (
                  <InputField key={i} {...input} onChange={handleOnChange} />
                ))}

                <p className="d-grid">
                  <Button
                    variant="warning"
                    type="submit"
                    className="d-flex gap-3 align-items-center"
                  >
                    Login
                    <span>{isLoading && <Spinner variant="border" />}</span>
                  </Button>
                </p>
              </Form>

              <div className="text-center mt-3">
                Don't have an account? <a href="/register">Register Now</a>
              </div>
            </div>
          </Col>
          <Col className="md-6 p-5 text-center reg-info d-flex align-items-center d-none d-md-flex">
            <div>
              <h1>Welcome to Library Management System</h1>
              <hr />

              <p>Login to view and start borrowing books</p>
            </div>
          </Col>
        </Row>
      </Container>
    </DefaultLayout>
  )
}

export default Login
