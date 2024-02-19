import React from 'react';
import styles from '../style.module.scss';
import { NavLink } from "react-router-dom";
const Header = () => {
    return (
        <header>
            <h1> Book Management app</h1>
            <hr />
            <div className={styles.links}>
                <NavLink to="/" className={styles.link} activeClassName={styles.active} exact>
                    Book List
                </NavLink>
                <NavLink to="/add" className={styles.link} activeClassName={styles.active} >
                    Add Book
                </NavLink>
            </div>
        </header>
    );
}

export default Header;
