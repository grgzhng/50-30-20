import React, { Component } from "react";
import ItemList from "./ItemList";
import AddBtn from "./AddBtn";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      add: true
    };
  }

  removeItem = id =>
    this.setState({
      items: this.state.items.filter((item, index) => {
        return index !== id;
      })
    });

  addItem = item => {
    this.setState({
      items: [...this.state.items, item]
    });
  };

  render() {
    return (
      <div className="App">
        <img src={require("../img/logo.jpg")} alt="" />
        <ItemList removeItem={id => this.removeItem(id)} />
        {this.state.add && <AddBtn addItem={item => this.addItem(item)} />}
      </div>
    );
  }
}

export default App;
