import { useState } from "react"
import { Button, Col, Form, Spinner } from "react-bootstrap"
import TeacherDashboardLayout from "../components/layout/DashboardLayout"
import bookImg from "../assets/book.jpg"
import { addBook } from "../helpers/axiosHelper"
import { toast } from "react-toastify"

const AddBook = () => {
  const [form, setForm] = useState({})
  const [loading, setLoading] = useState(false)

  const handleOnChange = (e) => {
    const { name, value } = e.target

    setForm({ ...form, [name]: value })
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const { status, message } = await addBook(form)
    status === "success" ? toast[status](message) : toast[status](message)
    setLoading(false)
  }

  return (
    <TeacherDashboardLayout>
      <div className="add">
        <div className="add-top">
          <h1>Add New Book</h1>
        </div>
        <div className="add-bottom">
          <Col md={7} className="d-none d-sm-block">
            <img src={bookImg} alt="book-img" style={{ width: "100%" }} />
          </Col>
          <Col md={5} sm={12} xs={12}>
            <Form onSubmit={handleOnSubmit}>
              <Form.Group className="mb-2">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  placeholder="Book Title"
                  required
                  type="text"
                  name="title"
                  onChange={handleOnChange}
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Author</Form.Label>
                <Form.Control
                  placeholder="Author"
                  required
                  type="text"
                  name="author"
                  onChange={handleOnChange}
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Quantity</Form.Label>
                <Form.Control
                  placeholder="Quantity"
                  required
                  type="number"
                  name="quantity"
                  onChange={handleOnChange}
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Year Published</Form.Label>
                <Form.Control
                  placeholder="Year"
                  required
                  type="number"
                  name="year"
                  onChange={handleOnChange}
                />
              </Form.Group>

              <Button type="submit" className="mt-4">
                ADD BOOK{" "}
                <span>
                  {loading && <Spinner animation="border" variant="warning" />}
                </span>
              </Button>
            </Form>
          </Col>
        </div>
      </div>
    </TeacherDashboardLayout>
  )
}

export default AddBook
