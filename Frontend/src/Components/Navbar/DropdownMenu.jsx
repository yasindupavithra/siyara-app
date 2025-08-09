import React from "react";
import "./Dropdown.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function DropdownMenu() {
  const [nav, setNav] = useState(false);

  return (
    <>
      <div className="tabbarParent">
        <div className="mainDiv">
          <div className="category">
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <p className="categoryP">Home</p>
            </Link>
          </div>
          <div className="category">
            <Link to="/services" style={{ textDecoration: 'none', color: 'inherit' }}>
              <p>Services</p>
            </Link>
          </div>
          <div className="category">
            <Link to="/projects" style={{ textDecoration: 'none', color: 'inherit' }}>
              <p>Projects</p>
            </Link>
          </div>
          <div className="category">
            <Link to="/products" style={{ textDecoration: 'none', color: 'inherit' }}>
              <p>Products</p>
            </Link>
          </div>
          <div className="category">
            <Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>
              <p>About Us</p>
            </Link>
          </div>
          <div className="category">
            <Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
              <p>Contact</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default DropdownMenu;