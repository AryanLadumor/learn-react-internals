import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import logo from "../images/Logo.jpeg";
import {useSelector} from "react-redux"
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus(); 

  //subscribing our store using selector
  const cartItems = useSelector((store)=>store.cart.items ) //which part of of store we subscribing will be givin to it with callback
    //this help us to identify which potion we need to read or i need to subscribe to
    console.log(cartItems)
  return (
    <div className="flex justify-between items-center bg-pink-100 shadow-lg mb-2">
      <div className="logo-container">
        <img className="w-56" src={logo.default} alt="image" />
      </div>

      <div className="flex items-center ">
        <ul className="flex  e p-4 m-4 ">
          <li className="px-4 mx-4 text-2xl ">
            Online Status{onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="px-4 mx-4 text-2xl  bg-pink-300 border-4  border-pink-500/50 rounded-full hover:bg-pink-400 hover:scale-105  transition duration-100">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 mx-4 text-2xl  bg-pink-300 border-4  border-pink-500/50 rounded-full hover:bg-pink-400 hover:scale-105  transition duration-100">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 mx-4 text-2xl  bg-pink-300 border-4  border-pink-500/50 rounded-full hover:bg-pink-400 hover:scale-105  transition duration-100">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 mx-4 text-2xl  bg-pink-300 border-4  border-pink-500/50 rounded-full hover:bg-pink-400 hover:scale-105  transition duration-100">
            <a href="/contact">Contact Us</a>
          </li>
          <li className="px-4 mx-4 text-2xl  bg-pink-300 border-4  border-pink-500/50 rounded-full hover:bg-pink-400 hover:scale-105  transition duration-100">
          <Link to="/cart" >cart-{cartItems.length}</Link>
          </li>
          <li className="px-4 mx-4 text-2xl  bg-pink-300 border-4  border-pink-500/50 rounded-full hover:bg-pink-400 hover:scale-105  transition duration-100">
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
