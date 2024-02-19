import React from 'react';
import BookForm from './BookForm';


// destructuring syntax to access the history, books and setBooks props into the component.
// The history prop is automatically passed by React Router to every component mentioned in the <Route />. We're passing the books and setBooks props from the AppRouter.js file.
// We're storing all the added books in an array. Inside the handleOnSubmit method, we're calling the setBooks function by passing an array by adding a newly added book first and then spreading all the books already added in the books
const AddBooks = ({history, books, setBooks}) => {
    const handelOnSubmit = (book) => {

    setBooks([books, ...books]);
    history.push("/")
        console.log(book)
    }
    return (
        <React.Fragment>
            <BookForm handelOnSubmit={handelOnSubmit}/>
        </React.Fragment>
    );
}

export default AddBooks;
