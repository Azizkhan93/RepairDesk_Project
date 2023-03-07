import React from "react";
import HeaderStyle from "./Header.Module.css";
export default function Header() {
  return (
    <div className={HeaderStyle.Header}>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light ps-3 pe-3 pt-3 pb-3">
          <a className="navbar-brand" to="#">
            <img className="header-logo" src="./images/logo.png"></img>
          </a>
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
            <ul className="navbar-nav ms-auto">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Features
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" to="#">
                    Action
                  </a>
                  <a className="dropdown-item" to="#">
                    Another action
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" to="#">
                    Something else here
                  </a>
                </div>
              </li>

              <li className="nav-item">
                <a className="nav-link" to="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" to="#">
                  Integrations
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" to="#">
                  Get in Touch
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active btn btn_trial" to="#">
                  Free Trial
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" to="#">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
