import React from 'react';
import '../header.css';
import { Link } from 'react-router-dom';

function Header({ cartItems }) {
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Shopping Cart
        </Link>
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
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link"
                activeClassName="active"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-link cart-link">
                <i className="bi bi-cart-check"></i>
                ({totalItems})
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;



