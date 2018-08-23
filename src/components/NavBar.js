import React, { Component } from "react";
import styled from "react-emotion";
import NavItem from "./NavItem";

const Nav = styled("div")`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
  border-bottom: solid black 2px;
`;

const Logo = styled("img")`
  flex-basis: 260px;
  margin: 0;
`;

class NavBar extends Component {
  render() {
    return (
      <Nav>
        <NavItem name="About" />
        <NavItem name="Calculator" />
        <Logo src={require("../img/logo.jpg")} alt="" />
        <NavItem name="Wish List" />
        <NavItem name="lul" />
      </Nav>
    );
  }
}

export default NavBar;
