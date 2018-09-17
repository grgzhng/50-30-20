import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import styled from "react-emotion";
import Popover from "@material-ui/core/Popover";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import { ITEMS_QUERY } from "./ItemList";

const ADD_ITEM = gql`
  mutation AddItem(
    $name: String!
    $price: Float!
    $link: String
    $image: String
  ) {
    addItem(name: $name, price: $price, link: $link, image: $image) {
      id
      createdAt
      name
      price
      image
      link
    }
  }
`;

const CenterDiv = styled("div")`
  text-align: center;
  margin: 5px;
`;

const FormDiv = styled("div")`
  display: flex;
  flex-wrap: wrap;
  padding: 5px 10px;
  max-width: 360px;
`;

const CustomInput = styled(Input)`
  max-width: 150px;
  margin: 5px;
`;

const Dollar = styled("p")`
  margin: 11px 0 0 5px;
  color: #a7a7a7;
`;

class AddItem extends Component {
  state = {
    anchorEl: null,
    open: false,
    name: "",
    price: "",
    image: "",
    link: ""
  };

  setAnchor = e => {
    this.setState({
      anchorEl: e.currentTarget
    });
  };

  handleClick = e => {
    if (!this.state.open) {
      this.setAnchor(e);
    }
    this.setState(prevState => ({
      open: !prevState.open
    }));
  };

  handleClose = () => {
    this.setState({
      anchorEl: null,
      open: false
    });
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { name, price, link, image } = this.state;

    return (
      <CenterDiv>
        <Button
          onClick={this.handleClick}
          variant="contained"
          color="green"
          className="btn"
        >
          Add Item
        </Button>

        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          onClose={this.handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center"
          }}
        >
          <FormDiv>
            <CustomInput
              className="mb2"
              value={name}
              onChange={this.handleChange("name")}
              type="text"
              placeholder="Name"
            />
            <Dollar>$</Dollar>
            <CustomInput
              className="mb2"
              value={price}
              onChange={this.handleChange("price")}
              type="text"
              placeholder="Price"
            />
            <CustomInput
              className="mb2"
              value={link}
              onChange={this.handleChange("link")}
              type="text"
              placeholder="Link"
            />
            <CustomInput
              className="mb2"
              value={image}
              onChange={this.handleChange("image")}
              type="text"
              placeholder="Image"
            />
          </FormDiv>
          <Mutation
            mutation={ADD_ITEM}
            variables={{ name, price, link, image }}
            update={(cache, { data: { addItem } }) => {
              const { items } = cache.readQuery({ query: ITEMS_QUERY });
              cache.writeQuery({
                query: ITEMS_QUERY,
                data: { items: [...items, addItem] }
              });
            }}
          >
            {addItem => <Button onClick={addItem}>Submit</Button>}
          </Mutation>
        </Popover>
      </CenterDiv>
    );
  }
}

export default AddItem;
