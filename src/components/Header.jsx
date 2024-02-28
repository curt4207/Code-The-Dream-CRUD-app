import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const navigation = [
    { path: "/", name: "List Book" },
    { path: "/add", name: "Add Book" },
  ];
  return (
    <div>
      <h1> Book Management</h1>
      <nav style={{ display: "flex", justifyContent: "space-between" }}>
        {navigation.map((nav) => (
          <NavLink key={nav.name} to={nav.path}>
            {nav.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Header;
