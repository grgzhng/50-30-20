import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import styled from "react-emotion";
import colors from "../styles/colors";
import Popover from "@material-ui/core/Popover";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

const Btn = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  margin: 20px auto;
  padding: 2px;
  text-align: center;
  border-radius: 5px;
  height: 35px;
  width: 65px;
  background-color: ${colors.lightGrey};
  color: ${colors.black};
  border: 2px ${colors.lightGrey} solid;

  &:hover {
    cursor: pointer;
    border: 2px ${colors.grey} solid;
  }
`;

const ButtonImage = styled("img")`
  margin: 0 5px 0 0;
`;

const Form = styled("form")`
  display: flex;
  flex-wrap: wrap;
  padding: 5px 15px;
  max-width: 250px;
`;

const FormInput = styled(Input)`
  margin: 5px 10px;
  width: 100px;
  font-size: 12px;
`;

const BtnMUI = styled(Button)`
  font-size: 14px;
`;

const IconImg = styled("img")`
  margin: 0 0 0 10px;
`;

const ADD_ITEM = gql`
  mutation AddItem(
    $name: String!
    $price: Number!
    $image: String
    $link: String
  ) {
    addItem(name: $name, price: $price, image: $image, link: $link) {
      id
      createdAt
      name
      price
      image
      link
    }
  }
`;

class AddBtn extends Component {
  state = {
    anchorEl: null,
    name: "",
    price: "",
    link: "",
    image: ""
  };

  handleClick = e => {
    this.setState({
      anchorEl: e.currentTarget
    });
  };

  handleClose = () => {
    this.setState({
      anchorEl: null
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
        <Btn onClick={this.handleClick}>
          <ButtonImage src={require("../img/add(2).png")} alt="" />
          <p> Add</p>
        </Btn>
        <Popover
          open={this.state.anchorEl}
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
          <Form action="" onSubmit={this.handleSubmit}>
            <FormInput
              placeholder="Name"
              onChange={this.handleChange("name")}
              required
            />
            <FormInput
              placeholder="Price"
              onChange={this.handleChange("price")}
              type="number"
              min="0"
              required
            />
            <FormInput
              placeholder="Link"
              onChange={this.handleChange("link")}
            />
            <FormInput
              placeholder="Image"
              onChange={this.handleChange("image")}
            />
            {/* <BtnMUI type="submit" variant="contained">
              Add Item
              <IconImg src={require("../img/tick.png")} alt="" />
            </BtnMUI> */}

            <Mutation
              mutation={ADD_ITEM}
              variables={{ name, price, link, image }}
            >
              {addItem => (
                <BtnMUI onClick={addItem} variant="contained">
                  Add Item
                  <IconImg src={require("../img/tick.png")} alt="" />
                </BtnMUI>
              )}
            </Mutation>
          </Form>
        </Popover>
      </div>
    );
  }
}

export default AddBtn;
