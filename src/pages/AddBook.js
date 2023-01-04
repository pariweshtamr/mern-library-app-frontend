import { useState } from "react"
import { Button, Col, Form } from "react-bootstrap"
import TeacherDashboardLayout from "../components/layout/TeacherDashboardLayout"
import bookImg from "../assets/book.jpg"

const AddBook = () => {
  const [form, setForm] = useState({})
  const [loading, setLoading] = useState(false)

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
            <Form>
              <Form.Group className="mb-2">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  placeholder="Book Title"
                  required
                  type="text"
                  name="title"
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Author</Form.Label>
                <Form.Control
                  placeholder="Author"
                  required
                  type="text"
                  name="author"
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Year Published</Form.Label>
                <Form.Control
                  placeholder="Year"
                  required
                  type="number"
                  name="year"
                />
              </Form.Group>

              <Button type="submit" className="mt-4">
                ADD BOOK
              </Button>
            </Form>
          </Col>
        </div>
      </div>
    </TeacherDashboardLayout>
  )
}

export default AddBook
