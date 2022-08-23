import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // token
  const userToken = localStorage.getItem("userToken");
  const finalUserToken = JSON.parse(userToken);
  console.log(finalUserToken);

  //   data
  const userData = localStorage.getItem("userData");
  const finalUserData = JSON.parse(userData);

  //   logout
  const logout = () => {
    localStorage.clear();
  };

  if (userToken) {
    return (
      <div className="container-fluid bg-light fixed-top sticky-top">
        <nav className="container navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">
            E-Agro
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="about">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="blog">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="request">
                  Request
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {finalUserData.name}
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="profile">
                    Profile
                  </Link>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="login" onClick={logout}>
                    LogOut
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  } else {
    return (
      <div className="container-fluid bg-light">
        <nav className="container navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">
            E-Agro
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="about">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="blog">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="request">
                  Request
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  More
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="login">
                    Login
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" to="register">
                    Register
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
};

export default Navbar;
