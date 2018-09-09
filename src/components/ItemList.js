import React, { Component } from "react";
import styled from "react-emotion";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Item from "./Item";

const List = styled("div")`
  display: flex;
  flex-direction: column;
`;

export const ITEMS_QUERY = gql`
  {
    items {
      id
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
                <Item key={item.id} item={item} />
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
