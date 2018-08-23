import React, { Component } from "react";
import ItemList from "./ItemList";
import AddBtn from "./AddBtn";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          title: "Mavic Air",
          price: "300",
          link:
            "https://store.dji.com/product/mavic-air?site=brandsite&from=buy_now_bar",
          image:
            "https://www.bhphotovideo.com/images/images2000x2000/dji_cp_pt_00000130_01_mavic_air_onyx_black_1385845.jpg"
        },
        {
          title: "Boosted Board",
          price: "750",
          image:
            "https://awesomestufftobuy.com/wp-content/uploads/2018/04/boosted-board-mini-s-electric-skateboard-7.jpg",
          link: "https://boostedboards.com/boards"
        }
      ],
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
        <ItemList
          items={this.state.items}
          removeItem={id => this.removeItem(id)}
        />
        {this.state.add && <AddBtn addItem={item => this.addItem(item)} />}
      </div>
    );
  }
}

export default App;
