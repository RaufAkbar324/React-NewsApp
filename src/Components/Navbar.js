import React, { Component } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            NewsMonkey
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <div className="container-fluid">
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
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link
                        className="nav-link active"
                        aria-current="page"
                        to="/"
                      >
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/About">
                        About
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/Business">
                        Business
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/Entertainment">
                        Entertainment
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/General">
                        General
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/Health">
                        Health
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/Sciences">
                        Sciences
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/Portstechnology">
                        Portstechnology
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
