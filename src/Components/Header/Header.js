import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark fixed-top">
        <div className="container-fluid">

          <a className="navbar-brand"  href="#">Trader Things</a>

          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="offcanvas offcanvas-end text-light bg-dark" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">

            <div className="offcanvas-header bg-dark">
              <h5 className="offcanvas-title">Trader Things</h5>
              <button type="button" className="btn-close text-light" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>

            <div className="offcanvas-body bg-dark">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item text-decoration-none">
                  <a className="nav-link active"  aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">About</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Courses
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
                    <li><a className="dropdown-item" href="#">Wolf of Forex Bundle</a></li>
                    <li><a className="dropdown-item" href="#">Wolf of Forex Technical Starter Pack</a></li>
                    <li>
                      <hr className="dropdown-divider"/>
                    </li>
                    <li><a className="dropdown-item" href="/login">Sign In</a></li>
                  </ul>
                </li>
              </ul>

              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>

            </div>

          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header