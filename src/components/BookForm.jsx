

import React, { useState } from 'react';
// Note that to create a unique ID we're calling the 
// uuidv4() method from the uuid npm package.
import { v4 as uuidv4 } from 'uuid';
import styles from '../style.module.scss';

//  we're first checking if the book prop is passed or not using the ternary operator.If the prop is passed, we're setting it to the passed value otherwise an empty string ('').

const BookForm = (props) => {
  // we've defined a state as an object using the useState() hook to store all the entered details like this
  const [book, setBook] = useState({
    bookName: props.book ? props.book.bookName : '',
    author: props.book ? props.book.author : '',
    quantity: props.book ? props.book.quantity : '',
    price: props.book ? props.book.price : '',
    date: props.book ? props.book.date : '',
  });

  
// added a state for displaying an error message
  const [errorMsg, setErrorMsg] = useState('');
  const { bookName, author, price, quantity } = book;

  const handelOnSubmit = (e) => {
    e.preventDefault();
    const values = [bookName, author, price, quantity];
    let errorMsg = '';

    // Inside this method, we're first checking if the user has entered all the details using the every array method:The every array method is one of the most useful array methods in JavaScript
    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const book = {
        id: uuidv4(),
        bookName,
        author,
        price,
        quantity,
        date: new Date(),
      };
      props.handelOnSubmit(book);
    } else {
      errorMsg = 'Please fill out all fields';
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    //  For both the quantity and price switch cases, we're also checking for empty values like this: value === ''. This is to allow the user to entWithout that check, the user will not be able to able to delete the entered value by pressing Ctrl + A + Delete.

    // When we type anything in the quantity input field, event.target.name will be quantity so the first switch case will match. Inside that switch case, we're checking to see if the entered value is an integer without a decimal point.
    switch (name) {
      case 'quantity':
        if (value === '' || parseInt(value) === +value) {
          setBook((prevState) => ({
            ...prevState,
            [name]: value,
          }));
        }
        break;

        // For the price switch case, we're checking for a decimal number with only two digits after the decimal point. So we've added a regular expression check that looks like this: value.match(/^\d{1,}(\.\d{0,2})?$/).
      case 'price':
        if (value === '' || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
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

//   the BookForm component, we're returning a Form where we enter book name, book author, quantity, and price. Each input field has added an onChange handler which calls the handleInputChange method.
  return (
    <div className={styles.mainform}>
     {errorMsg && <p className={styles.errormsg} > {errorMsg} </p>}
     <Form onSubmit={handelOnSubmit}>
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
{/* When we type anything in the quantity input field, event.target.name will be quantity so the first switch case will match. Inside that switch case, we're checking to see if the entered value is an integer without a decimal point.  */}
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
    <Button variant="primary" type="submit" className={styles.submitbtn}>Submit</Button>
       
     </Form>
    </div>
  );
};

export default BookForm;