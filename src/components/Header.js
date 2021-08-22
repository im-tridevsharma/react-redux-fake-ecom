import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-light bg-light">
        <Link to="/" className="navbar-brand">
          <span className="mr-2">fakeEcom</span>
          <small style={{ fontSize: "12px" }}>
            powered by <code>fakestoreapi</code>
          </small>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
