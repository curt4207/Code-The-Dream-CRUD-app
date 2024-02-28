import React, { useState } from "react";
import BookForm from "./BookForm";
import Header from "./Header";
import Layout from "./Layout";
import BooksList from "./BooksList";

// destructuring syntax to access the history, books and setBooks props into the component.
// The history prop is automatically passed by React Router to every component mentioned in the <Route />. We're passing the books and setBooks props from the AppRouter.js file.

// We're storing all the added books in an array. Inside the handleOnSubmit method, we're calling the setBooks function by passing an array by adding a newly added book first and then spreading all the books already added in the books
const AddBooks = ({}) => {
  const [books, setBooks] = useState([]);
  const [bookInput, setBookInput] = useState({ title: "", author: "", price: "", quantity: ""})

  const handelOnSubmit = (book, e) => {
    e.preventDefault();
    setBooks([book, ...books]);
     // Clear the form values
   setBookInput({ title: "", author: "", price: "", quantity: ""})
    
    console.log("book", book);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookInput({ ...bookInput, [name]: value });
  };

  console.log("books", books);

  return (
    <React.Fragment>
      <Layout>
        <BookForm handelOnSubmit={handelOnSubmit}
        handleInputChange={handleInputChange}
        bookInput={bookInput}
         />
        {/* Create a book list component books={} */}
        <BooksList books={books} />
      </Layout>
    </React.Fragment>
  );
};

export default AddBooks;
