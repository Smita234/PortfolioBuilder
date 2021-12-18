import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <header className="p-3 bg-success text-white">
      <div className="container">
        <div>
          <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fvisuallure.com%2Fst-louis-logo-design%2Flogo-design-portfolio%2F&psig=AOvVaw1a8ynJzpukEHHj0NJP__IX&ust=1639835111749000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNinkYH86vQCFQAAAAAdAAAAABAP" alt=""/>
        </div>
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href=""
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            <svg
              className="bi me-2"
              width="40"
              height="32"
              role="img"
              aria-label="Bootstrap"
            >
              <use xlinkHref="#bootstrap" />
            </svg>
          </a>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 ">
            <li>
              <NavLink
                to="/signin"
                activeClassName="active"
                className="nav-link px-2 text-white"
              >
                SignIn
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/signup"
                activeClassName="active"
                className="nav-link px-2 text-white"
              >
                SignUp
              </NavLink>
            </li>
            <li>
            <NavLink
                to="/addportfolio"
                activeClassName="active"
                className="nav-link px-2 text-white"
              >
                Add Portfolio
              </NavLink>
            </li>
            <li>
              <a href="#" className="nav-link px-2 text-white">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 text-white">
                About
              </a>
            </li>
          </ul>

          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
            <input
              type="search"
              className="form-control form-control-dark"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>

          <div className="text-end">
            <button type="button" className="btn btn-outline-light me-2">
              Search
            </button>
            {/* <button type="button" className="btn btn-warning">
              
            </button> */}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
