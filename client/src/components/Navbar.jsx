import React, { Component } from "react";
import Link from "react-router-dom";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-md navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Bloggy
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Contact
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a
                    className="dropdown-item"
                    href="https://www.instagram.com/pareekshithachar/"
                  >
                    Instagram
                  </a>
                  <a
                    className="dropdown-item"
                    href="https://www.facebook.com/pareekshith.achar#"
                  >
                    Facebook
                  </a>
                  <a
                    className="dropdown-item"
                    href="https://twitter.com/Pareekshithach1"
                  >
                    Twitter
                  </a>
                  <a
                    className="dropdown-item"
                    href="https://github.com/pareekshithachar"
                  >
                    Github
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
