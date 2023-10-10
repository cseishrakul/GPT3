import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import logo from "../../assets/logo.svg";

const Menu = () => (
  <>
    <p className="">
      <a href="#home" className="">
        Home
      </a>
    </p>
    <p className="">
      <a href="#wgpt3" className="">
        What is GPT
      </a>
    </p>
    <p className="">
      <a href="#possibility" className="">
        Open AI
      </a>
    </p>
    <p className="">
      <a href="#features" className="">
        Case Studies
      </a>
    </p>
    <p className="">
      <a href="#blog" className="">
        Library
      </a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="gpt3_navbar">
      <div className="gpt3_navbar-links">
        <div className="gpt3_navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3_navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt3_navbar-sign">
        <p className="">Sign In</p>
        <button type="button">Sign Up</button>
      </div>
      <div className="gpt3_navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3_navbar-menu_container scale-up-center">
            <div className="gpt3_navbar-menu_container-links">
              <Menu />
              <div className="gpt3_navbar-menu_container-links-sign">
                <p className="">Sign In</p>
                <button type="button">Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
