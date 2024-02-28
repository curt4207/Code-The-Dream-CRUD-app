import React from "react";

const BooksList = ({books}) => {
  console.log("books list", books);

  return (
    <>
      <h2>List of books</h2>
      <ul>
        {books.map((book) => (
          <li key={book.bookName}>
            {book.bookName} - {book.author} - {book.quantity} - {book.price}
          </li>
        ))}
      </ul>
    </>
  );
};

export default BooksList;

