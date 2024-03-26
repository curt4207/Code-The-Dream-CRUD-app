import React from "react";
import { booksContext } from "../context/BookProvider";
import { useContext } from "react";

const BooksList = () => {
  const [books, setBooks] = useContext(booksContext);
  console.log("books list", books);

  return (
    <>
      <h2>List of books</h2>
      <ul>
        { books.map((book) => (
          <li key={book.bookName}>
            {book.bookName} - {book.author} - {book.quantity} - {book.price}
          </li>
        ))}
      </ul>
    </>
  );
};

export default BooksList;

