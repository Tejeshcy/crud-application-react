import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const history = useNavigate();

  const token = window.localStorage.getItem("token");

  const handleLogin = () => {
    history("/login");
  };

  const handleHome = () => {
    history("/");
  };

  const handleUser = () => {
    history("/user");
  };

  const handleSignup = () => {
    history("/signup");
  };

  const handleLogout = () => {
    window.localStorage.clear();
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-warning">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            CRUD APP
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" onClick={handleHome}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={handleUser}>
                  User
                </a>
              </li>
            </ul>

            <form className="d-flex" role="search">
              {token == null && (
                <button className="btn btn-primary " onClick={handleLogin}>
                  Login
                </button>
              )}
              {token == null && (
                <button className="btn btn-primary mx-2" onClick={handleSignup}>
                  SignUp
                </button>
              )}
              {token !== null && (
                <button className="btn btn-danger" onClick={handleLogout}>
                  Logout
                </button>
              )}
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
