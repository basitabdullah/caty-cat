import React from "react";
import { Link } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import logo from "../assets/clipart1539887.png";
const Header = () => {
  return (
    <>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/signup"}>Sign up</Link>
        <Link to={"/login"}>Login</Link>
      </nav>

      <div className="header">
        <div>
          <img src={logo} alt="111" />
        </div>

        <h2>cedarville.com</h2>
        <div className="inputdiv">
          <input type="text" placeholder="search.."></input>
          <button type="submit">
            <CiSearch />
          </button>
        </div>
          <BsCart />
          <IoNotificationsOutline/>
      </div>
    </>
  );
};

export default Header;
