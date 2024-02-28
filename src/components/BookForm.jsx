import React, { useState } from "react";
// Note that to create a unique ID we're calling the
// uuidv4() method from the uuid npm package.
import { v4 as uuidv4 } from "uuid";
import styles from "../style.module.scss";
import { Form, Button } from "react-bootstrap";

//  we're first checking if the book prop is passed or not using the ternary operator.If the prop is passed, we're setting it to the passed value otherwise an empty string ('').

// When we type anything in the quantity input field, event.target.name will be quantity so the first switch case will match. Inside that switch case, we're checking to see if the entered value is an integer without a decimal point.

// For the price switch case, we're checking for a decimal number with only two digits after the decimal point. So we've added a regular expression check that looks like this: value.match(/^\d{1,}(\.\d{0,2})?$/).

const BookForm = ({ handelOnSubmit }) => {
  // we've defined a state as an object using the useState() hook to store all the entered details like this

  const [book, setBook] = useState({
    bookName: "",
    author: "",
    quantity: "",
    price: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // added a state for displaying an error message
  const [errorMsg, setErrorMsg] = useState("");
  const { bookName, author, price, quantity } = book;

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "quantity":
        if (value === "" || parseInt(value) === +value) {
          setBook((prevState) => ({
            ...prevState,
            [name]: value,
          }));
        }
        break;
      case "price":
        if (value === "" || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
          setBook((prevState) => ({
            ...prevState,
            [name]: value,
          }));
        }
        break;
      default:
        setBook((prevState) => ({
          ...prevState,
          [name]: value,
        }));
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("HandleSubmit ");
    
    handelOnSubmit(book, e);
    
    setBook({
      bookName: "",
      author: "",
      quantity: "",
      price: "",
    });
  };


  //   the BookForm component, we're returning a Form where we enter book name, book author, quantity, and price. Each input field has added an onChange handler which calls the handleInputChange method.
  return (
    <div className={styles.mainform}>
      {errorMsg && <p className={styles.errormsg}> {errorMsg} </p>}
      <Form
        onSubmit={(e) => {
          handelOnSubmit(book, e);
        }}
      >
        <Form.Group controlId="name">
          <Form.Label>Book Name</Form.Label>
          <Form.Control
            className={styles.inputcontrol}
            type="text"
            name="bookName"
            value={bookName}
            placeholder="Enter name of book"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="author">
          <Form.Label>BookAuthor</Form.Label>
          <Form.Control
            className={styles.inputcontrol}
            type="text"
            name="author"
            value={author}
            placeholder="Enter name of author"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="quantity">
          <Form.Label>Book Quantity</Form.Label>
          <Form.Control
            className={styles.inputcontrol}
            type="number"
            name="quantity"
            value={quantity}
            placeholder="Enter available quantity"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="price">
          <Form.Label>Book Price</Form.Label>
          <Form.Control
            className={styles.inputcontrol}
            type="text"
            name="price"
            value={price}
            placeholder="Enter price of the book"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button
          onClick={handleSubmit}
          variant="primary"
          type="submit"
          className={styles.submitbtn}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default BookForm;
