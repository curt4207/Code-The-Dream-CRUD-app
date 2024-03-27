import React, { useContext, useState } from "react";
import BookForm from "./BookForm";
import Header from "./Header";
import Layout from "./Layout";
import BooksList from "./BooksList";
import { booksContext } from "../context/BookProvider";

// destructuring syntax to access the history, books and setBooks props into the component.
// The history prop is automatically passed by React Router to every component mentioned in the <Route />. We're passing the books and setBooks props from the AppRouter.js file.

// We're storing all the added books in an array. Inside the handleOnSubmit method, we're calling the setBooks function by passing an array by adding a newly added book first and then spreading all the books already added in the books
const AddBooks = () => {
  // const [books, setBooks] = useState([]);

  const [books, setBooks] = useContext(booksContext);

  // console.log("books", books);
  const [bookInput, setBookInput] = useState({
    title: "",
    author: "",
    price: "",
    quantity: "",
  });

  const handelOnSubmit = (book, e) => {
    console.log("book", book);
    e.preventDefault();
    setBooks([...books, book]);
    // Clear the form values
    setBookInput({ title: "", author: "", price: "", quantity: "" });
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookInput({ ...bookInput, [name]: value });
  };

  // console.log("books", books);

  return (
    <React.Fragment>
      <Layout>
        <BookForm
          handelOnSubmit={handelOnSubmit}
          handleInputChange={handleInputChange}
          bookInput={bookInput}
        />
      </Layout>
    </React.Fragment>
  );
};

export default AddBooks;
