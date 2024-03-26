import React from 'react';
import { createContext, useState } from 'react';

//create a context, with createContext api.  we have used createContext api to create our userDetailsContext. Now, the context got created, so we will need to create a provider.In the function UserDetailsProvider, we created a provider for userDetailsContext. <contextname.Provider> is a common syntax for creating it. Please note a value prop here. The value prop will be used always to pass the shared state down.
export const booksContext = createContext();

const BookProvider = (props) => {
        // this state will be shared with all components 
    const [books, setBooks] = useState([]);

    return (
                // this is the provider providing state
        <booksContext.Provider value={[books, setBooks]}>
            {props.children}
        </booksContext.Provider>
    );
};

export default BookProvider;