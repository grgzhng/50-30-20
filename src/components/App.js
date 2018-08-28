import React, { Component } from "react";
import ItemList from "./ItemList";
import AddItem from "./AddItem";
import AddBtn from "./AddBtn";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      add: true
    };
  }

  render() {
    return (
      <div className="App">
        <img src={require("../img/logo.jpg")} alt="" />
        <ItemList removeItem={id => this.removeItem(id)} />
        {this.state.add && <AddBtn />}
        {this.state.add && <AddItem />}
      </div>
    );
  }
}

export default App;
