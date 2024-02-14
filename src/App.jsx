import { useState } from "react";
import Header from "./components/Header";
import BookList from "./components/BookList";

import MouseMove from "./components/MouseMove";
import styles from './style.module.scss';


function App() {
  return (
    <div className={styles.app}>
      <MouseMove />

      <div className={styles.overlay}>
        <Header />
        <BookList />
      </div>
    </div>
  );
}

export default App;
