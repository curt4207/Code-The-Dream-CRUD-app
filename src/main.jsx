import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home.jsx";

import styles from "./style.module.scss";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  // Route,
  // Switch
} from "react-router-dom";
// import Header from "./components/Header.jsx";
import AddBooks from "./components/AddBooks.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/add",
    element: <AddBooks />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
