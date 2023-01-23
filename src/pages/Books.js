import React, { useEffect } from "react"
import { Container, Row, Spinner } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"

import BooksList from "../components/books/BooksList"
import DashboardLayout from "../components/layout/DashboardLayout"
import { getBooksAction } from "../redux/Book/BookAction"

const Books = () => {
  const dispatch = useDispatch()
  const { isLoading, books } = useSelector((state) => state.book)
  const { userInfo } = useSelector((state) => state.user)

  useEffect(() => {
    dispatch(getBooksAction())
  }, [dispatch])

  // const handleOnSelect = (e) => {
  //   const { checked, value } = e.target

  //   if (checked) {
  //     setBookToDelete([...bookToDelete, value])
  //   } else {
  //     setBookToDelete(bookToDelete.filter((book) => book !== value))
  //   }
  // }

  // const handleOnDelete = async () => {
  //   if (
  //     window.confirm(
  //       `Are you sure you want to delete ${bookToDelete.length} books?`
  //     )
  //   ) {
  //     const { status, message } = await deleteBooks(bookToDelete)
  //     if (status === "success") {
  //       setBookToDelete([])
  //       toast[status](message)
  //       fetchAllBooks()
  //     }
  //   }
  // }

  // const onSearch = (e) => {
  //   const { value } = e.target

  //   const newArray = books?.filter((b) =>
  //     b.title.toLowerCase().includes(value.toLowerCase())
  //   )
  //   value !== "" ? setBooks(newArray) : fetchAllBooks()
  // }

  return (
    <DashboardLayout>
      <Container>
        <Row className="p-5">
          {/* <div className="mb-4 mx-auto" style={{ width: "40%" }}>
            <Form.Control
              type="search"
              name="search"
              placeholder="Search book title..."
              onChange={onSearch}
            />
          </div> */}
          {/* <Table striped bordered hover>
            <thead>
              <tr className="text-center">
                {user?.role === "teacher" ? (
                  <th>
                    <Form.Check type="checkbox" />
                  </th>
                ) : (
                  <th>#</th>
                )}

                <th>Title</th>
                <th>Author</th>
                <th>Year</th>
                <th>Availability</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {books?.map((book, i) => (
                <tr key={book._id} className="text-center">
                  {user?.role === "teacher" ? (
                    <td>
                      <Form.Check
                        type="checkbox"
                        value={book._id}
                        onChange={handleOnSelect}
                        checked={bookToDelete.includes(book._id)}
                      />
                    </td>
                  ) : (
                    <td>{i + 1}</td>
                  )}

                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.year}</td>
                  <td>{book.availableQuantity}</td>
                  <td className="d-flex justify-content-center">
                    <div className="d-flex gap-2">
                      {user?.role === "teacher" ? (
                        <>
                          <Button variant="info">View</Button>
                          <Button variant="warning">Edit</Button>
                        </>
                      ) : (
                        <>
                          <Button
                            variant="warning"
                            onClick={() => handleBorrow(book._id)}
                          >
                            Borrow
                          </Button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table> */}
          {isLoading && <Spinner animation="border" />}
          <BooksList books={books} user={userInfo} />
          {/* {bookToDelete.length ? (
            <div className="">
              <Button variant="danger" onClick={handleOnDelete}>
                Delete {bookToDelete.length} book(s)
              </Button>
            </div>
          ) : null} */}
        </Row>
      </Container>
    </DashboardLayout>
  )
}

export default Books
