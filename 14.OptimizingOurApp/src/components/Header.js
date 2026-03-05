import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  // console.log("Header Render");
  const onlineStatus = useOnlineStatus()

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
        Online Status{onlineStatus ? "✅" : "🔴"}
      </li>

          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>

          <li>
            <a href="/contact">Contact Us</a>
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
