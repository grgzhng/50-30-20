import React, { Component } from "react";
import styled from "react-emotion";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Item from "./Item";

const List = styled("div")`
  display: flex;
  flex-direction: column;
`;

const ITEMS_QUERY = gql`
  {
    items {
      name
      price
      image
      link
    }
  }
`;

class ItemList extends Component {
  render() {
    return (
      <Query query={ITEMS_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>;
          if (error) return <div>Error</div>;

          const itemsToRender = data.items;

          return (
            <List>
              {itemsToRender.map(item => (
                <Item
                  key={item.id}
                  item={item}
                  removeItem={id => this.props.removeItem(id)}
                />
              ))}
              ;
            </List>
          );
        }}
      </Query>
    );
  }
}

export default ItemList;
