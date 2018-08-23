import React, { Component } from "react";
import styled from "react-emotion";
import colors from "./colors";

const Nav__Item = styled("div")`
  flex: 1;
  font-size: 30px;
  margin: 0;
  color: ${colors.black};
`;

class NavItem extends Component {
  render() {
    return <Nav__Item>{this.props.name}</Nav__Item>;
  }
}

export default NavItem;
