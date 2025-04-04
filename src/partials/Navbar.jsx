import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      className="container-fluid border-bottom bg-light wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container px-0">
        <nav className="navbar navbar-light navbar-expand-xl py-3">
          <Link to="/" className="navbar-brand">
            <h1 className="text-primary display-6">
              Tots<span className="text-secondary">Castle</span>
            </h1>
          </Link>
          <button
            className="navbar-toggler py-2 px-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars text-primary"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav mx-auto">
              <NavLink to="/" className="nav-item nav-link" activeClassName="active">
                Home
              </NavLink>
              <NavLink to="/about" className="nav-item nav-link" activeClassName="active">
                About
              </NavLink>
              <NavLink to="/services" className="nav-item nav-link" activeClassName="active">
                Services
              </NavLink>
              <NavLink to="/programs" className="nav-item nav-link" activeClassName="active">
                Programs
              </NavLink>
              <NavLink to="/events" className="nav-item nav-link" activeClassName="active">
                Events
              </NavLink>
              <NavLink to="/contact" className="nav-item nav-link" activeClassName="active">
                Contact
              </NavLink>
            </div>
            <div className="d-flex me-4">
              <div
                id="phone-tada"
                className="d-flex align-items-center justify-content-center"
              >
                <a
                  href="#"
                  className="position-relative wow tada"
                  data-wow-delay=".9s"
                >
                  <i className="fa fa-phone-alt text-primary fa-2x me-4"></i>
                  <div
                    className="position-absolute"
                    style={{ top: "-7px", left: "20px" }}
                  >
                    <span>
                      <i className="fa fa-comment-dots text-secondary"></i>
                    </span>
                  </div>
                </a>
              </div>
              <div className="d-flex flex-column pe-3 ps-3 border-start border-primary">
                <span className="text-primary">Have any questions?</span>
                <a href="#">
                  <span className="text-secondary">Free: + 0123 456 7890</span>
                </a>
              </div>
            </div>
            {/* <button
              className="btn-search btn btn-primary btn-md-square rounded-circle"
              data-bs-toggle="modal"
              data-bs-target="#searchModal"
            >
              <i className="fas fa-search text-white"></i>
            </button> */}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;