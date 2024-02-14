import React from 'react';
import BookForm from './BookForm';
const AddBooks = () => {
    const handelOnSubmit = (book) => {
        console.log(book)
    }
    return (
        <React.Fragment>
            <BookForm handelOnSubmit={handelOnSubmit}/>
        </React.Fragment>
    );
}

export default AddBooks;
