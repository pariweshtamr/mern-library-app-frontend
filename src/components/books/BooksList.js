import React from "react"
import BookCard from "./BookCard"

const BooksList = ({ books, fetchBooks, user }) => {
  return (
    <div className="books-list">
      {books.map((book) => (
        <BookCard
          key={book._id}
          book={book}
          fetchBooks={fetchBooks}
          user={user}
        />
      ))}
    </div>
  )
}

export default BooksList
