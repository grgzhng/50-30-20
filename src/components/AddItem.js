import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import styled from "react-emotion";
import Popover from "@material-ui/core/Popover";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";

const ADD_ITEM = gql`
  mutation AddItem(
    $name: String!
    $price: Number!
    $image: String
    $link: String
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
      <div>
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
          <div>
            <Input
              className="mb2"
              value={name}
              onChange={this.handleChange("name")}
              type="text"
              placeholder="Name"
            />
            <Input
              className="mb2"
              value={price}
              onChange={this.handleChange("price")}
              type="number"
              placeholder="Price"
            />
            <Input
              className="mb2"
              value={link}
              onChange={this.handleChange("link")}
              type="text"
              placeholder="Link"
            />
            <Input
              className="mb2"
              value={image}
              onChange={this.handleChange("image")}
              type="text"
              placeholder="Image"
            />
          </div>
          <Mutation
            mutation={ADD_ITEM}
            variables={{ name, price, link, image }}
          >
            {addItem => <Button onClick={addItem}>Submit</Button>}
          </Mutation>
        </Popover>
      </div>
    );
  }
}

export default AddItem;
