import React from 'react';
import Header from "./Header";
import Footer from './Footer';

const Layout = ({children}) => {
    return (
        <>
            <Header />
            {children}
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <Footer /> 
        </>
    );
}

export default Layout;
