import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  // console.log("Header Render");

  useEffect(() => {
    // console.log("UseEffect Called");
  });

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="image" />
      </div>

      <div className="nav-items">

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <a href="/about">About Us</a>
          </li>

          <li>
            <Link to="/contact">Contact Us</Link>
          </li>

          <li>cart</li>

          <li>
            <button
              className="auth-button"
              onClick={() => {
                if (btnName === "Login") {
                  setBtnName("Logout");
                } else {
                  setBtnName("Login");
                }
              }}
            >
              {btnName}
            </button>
          </li>
          
        </ul>

      </div>
    </div>
  );
};

export default Header;
