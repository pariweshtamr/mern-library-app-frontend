import React, { useEffect, useState } from "react"
import { Button, Container, Row, Table } from "react-bootstrap"
import { toast } from "react-toastify"
import DashboardLayout from "../components/layout/DashboardLayout"
import { getBooksBorrowed, returnBook } from "../helpers/axiosHelper"

const MyBooks = ({ user }) => {
  const [myBooks, setMyBooks] = useState([])

  const fetchBooksBorrowed = async () => {
    const res = await getBooksBorrowed(user._id)
    console.log(res)
    setMyBooks(res.books)
  }
  useEffect(() => {
    fetchBooksBorrowed()
  }, [])

  const handleReturn = async (bookId) => {
    if (window.confirm("Are you sure you want to return this book?")) {
      if (bookId && user._id) {
        await returnBook(bookId, user._id)
          .then((response) =>
            response?.status
              ? toast.success(response.message) && fetchBooksBorrowed()
              : toast.warning(response.message)
          )
          .catch((err) => console.log(err))
      }
    }
  }
  return (
    <DashboardLayout>
      <Container>
        <Row className="p-5">
          <Table striped bordered hover>
            <thead>
              <tr className="text-center">
                <th>#</th>
                <th>Title</th>
                <th>Author</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {myBooks?.map((book, i) => (
                <tr key={book._id} className="text-center">
                  <td>{i + 1}</td>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => handleReturn(book._id)}
                    >
                      Return
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Row>
      </Container>
    </DashboardLayout>
  )
}

export default MyBooks
