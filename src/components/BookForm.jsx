

import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const BookForm = ({props, book}) => {
  const [book, setBook] = useState({
    bookname: book ? book.bookname : '',
    author: book ? book.author : '',
    quantity: book ? book.quantity : '',
    price: book ? book.price : '',
    date: book ? book.date : '',
  });
 const [ myInput, setMyInput] = useState("")
  
 
  const [errorMsg, setErrorMsg] = useState('');

  const { bookname, author, price, quantity } = book;

  const handelOnSubmit = (e) => {
    e.preventDefault();
    const values = [bookname, author, price, quantity];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const newBook = {
        id: uuidv4(),
        bookname,
        author,
        price,
        quantity,
        date: new Date(),
      };
      props.handelOnSubmit(newBook);
    } else {
      errorMsg = 'Please fill out all fields';
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case 'quantity':
        if (value === '' || parseInt(value) === +value) {
          setBook((prevState) => ({
            ...prevState,
            [name]: value,
          }));
        }
        break;
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

  return (
    <div className="main-form">
     {errorMsg}
    </div>
  );
};
