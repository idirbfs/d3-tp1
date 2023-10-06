import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <h5>
              <Link className="nav-link" to="/">
                Data
              </Link>
            </h5>
            <h5>
              <Link className="nav-link" to="/graphs">
                Graph
              </Link>
            </h5>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
