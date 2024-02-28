import React from "react";
import {
  BrowserRouter,
  //  Switch,
  Route,
} from "react-router-dom";

import Header from "./components/Header";
import AddBooks from "./components/AddBooks";
import BooksList from "./components/BooksList";
import MouseMove from "./components/MouseMove";
import styles from "./style.module.scss";
import Layout from "./components/Layout";

const Home = () => {
  return (
    <Layout>
      <div className={styles.app}>
        <h1>Home</h1>
        <div className={styles.maincontent}></div>
      </div>
    </Layout>
  );
};

export default Home;
