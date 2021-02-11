import React, { useState } from "react";
import { Logo, Nav, NavContainer, NavLinks, Hamburger } from "./navbarElements";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <NavContainer>
      <Nav>
        <Logo>
          <h1>Logo</h1>
        </Logo>
        <NavLinks clicked={clicked}>
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/home">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/home">About</NavLink>
          </li>
        </NavLinks>

        <Hamburger onClick={() => setClicked(!clicked)}>
          <div className={clicked ? "line line-active" : "line"}></div>
          <div className={clicked ? "line line-active" : "line"}></div>
          <div className={clicked ? "line line-active" : "line"}></div>
        </Hamburger>
      </Nav>
    </NavContainer>
  );
};

export default Navbar;
