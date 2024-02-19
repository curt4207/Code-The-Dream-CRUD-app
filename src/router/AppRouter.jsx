import React from 'react';
import { BrowserRouter,
    //  Switch,
 } from 'react-router-dom';
      import { Route, Routes } from "react-router-dom";
import Header from '../components/Header';
import AddBooks from './../components/AddBooks';
import BooksList from '../components/BooksList';
import MouseMove from '../components/MouseMove';
import styles from '../style.module.scss';

const AppRouter = () => {
    return (
   
    <BrowserRouter>
            <div className={styles.app}>
      <MouseMove />
        <div className={styles.overlay}>
    
                <Header />
                <div className= {styles.maincontent}>
                    <Routes>
                    <Route Component={BooksList} path='/' exact={true}/>
                    <Route Component={AddBooks} path='/add'  />
                    </Routes>
                </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default AppRouter;
