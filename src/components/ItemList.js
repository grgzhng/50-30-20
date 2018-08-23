import React, { Component } from "react";
import styled from "react-emotion";
import Item from "./Item";

const List = styled("div")`
  display: flex;
  flex-direction: column;
`;

class ItemList extends Component {
  render() {
    return (
      <List>
        {this.props.items.map((item, index) => (
          <Item
            key={index}
            id={index}
            title={item.title}
            price={item.price}
            link={item.link}
            image={item.image}
            removeItem={id => this.props.removeItem(id)}
          />
        ))}
      </List>
    );
  }
}

export default ItemList;
