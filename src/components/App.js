import React, { Component } from "react";
import Title from "./Title";
import ItemList from "./ItemList";
import AddItem from "./AddItem";

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
        <Title />
        <ItemList removeItem={id => this.removeItem(id)} />
        {this.state.add && <AddItem />}
      </div>
    );
  }
}

export default App;
