import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid nav-custom-width">
        <div>
          <a className="navbar-brand" href="#">
            <img
              src="assets/img/logo-ALTA.png"
              alt=""
              width="100"
              height="auto"
            />
          </a>
        </div>
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
          <ul className="navbar-nav ms-auto">
            <li className="nav-item me-3">
              <a className="nav-link active" aria-current="page" href="#">
                HOME
              </a>
            </li>
            <li className="nav-item me-3">
              <a className="nav-link" href="#">
                ABOUT
              </a>
            </li>
            <li className="nav-item me-3">
              <a className="nav-link" href="#">
                EXPERIENCE
              </a>
            </li>
            <li className="nav-item me-3">
              <a className="nav-link" href="contact.html">
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
