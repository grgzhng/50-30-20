import React, { Component } from "react";
import styled from "react-emotion";
import colors from "../styles/colors";

const Card = styled("div")`
  display: flex;
  justify-content: space-between;
  width: 400px;
  margin: 10px auto;
  box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);
`;

const ImgHolder = styled("div")`
  max-width: 115px;
  max-height: 90px;
  margin: 0;
  padding: 5px 10px;
`;

const Image = styled("img")`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  padding: 0;
`;

const Content = styled("div")`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${colors.lightGrey};
  padding: 0 15px;
`;

const Title = styled("a")`
  color: ${colors.black};
  margin: 0;
  padding: 15px 0 2px;
  text-align: left;
  font-size: 24px;
  font-weight: 600;
  text-decoration: none;
`;

const HoriFlex = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7px 0 5px;
  margin: 0;
`;

const Price = styled("h5")`
  color: ${colors.black};
  font-size: 20px;
  text-align: left;
  margin: 0;
  flex: 3;
`;

const Button = styled("button")`
  margin-left: 5px;
  color: ${props => (props.bought ? colors.greenBtnText : colors.redBtnText)};
  font-size: 12px;
  background-color: ${props =>
    props.bought ? colors.greenBtn : colors.redBtn};
  border: none;
  padding: 2px;
  text-align: center;
  height: 30px;
  border-radius: 5px;
  flex: 2;

  &:hover {
    cursor: pointer;
  }
`;

class Item extends Component {
  render() {
    return (
      <Card>
        <ImgHolder>
          <Image
            src={
              this.props.item.image ||
              "https://d30y9cdsu7xlg0.cloudfront.net/png/42415-200.png"
            }
            alt={this.props.item.name}
          />
        </ImgHolder>
        <Content>
          <Title href={this.props.item.link}>{this.props.item.name}</Title>
          <HoriFlex>
            <Price>${this.props.item.price}</Price>
            <Button
              bought
              first
              onClick={() => console.log("copped " + this.props.item.name)}
            >
              Copped
            </Button>
            <Button
              onClick={() => this.props.removeItem(this.props.key)}
              // onClick={() => this.props.removeItem()}
            >
              Dropped
            </Button>
          </HoriFlex>
        </Content>
      </Card>
    );
  }
}

export default Item;
