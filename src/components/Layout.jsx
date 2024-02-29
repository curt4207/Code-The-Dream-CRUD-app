import React from 'react';
import Header from "./Header";
import Footer from './Footer';
import styles from "../style.module.scss";


const Layout = ({children}) => {
    return (
        <>
            <Header />
            {children}
            <div className={styles.wave}></div>
            <div className={styles.wave}></div>
            <div className={styles.wave}></div>
            
            <Footer /> 
        </>
    );
}

export default Layout;
