import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-light bg-light">
        <Link to="/" className="navbar-brand">
          fakeEcom
        </Link>
      </nav>
    </header>
  );
};

export default Header;
