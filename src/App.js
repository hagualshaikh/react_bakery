import React, { Component } from "react";

import Add from "./components/Add";
import List from "./components/ List";
import Pay from "./components/Pay";
import Button from "./components/core/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Card from './components/product/Card'
import 'react-tabs/style/react-tabs.css';
// or

const active = {
  borderColor: "red"
};
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "add",
      items: [],
      price: 1,
      name: "",
      
    };
    this.onClickInputChange =this.onClickInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.AddPrice =this.AddPrice.bind(this)
    this.onClickTapAdd = this.onClickTapAdd.bind(this);
    this.onClickTapList = this.onClickTapList.bind(this);
    this.onClickTapPay = this.onClickTapPay.bind(this);
  }
  
  onClickInputChange = (e) => {
    // e.preventDefault();
    this.setState({ name: e.target.value });
    console.log("should add text " ,this.state);
  };
  handleSubmit(e) {
    e.preventDefault()
    // alert('A name was submitted: ' + this.state.input);
    const items = this.state.items;
    const {name,price} =this.state
    items.push({name,price})
    console.log("should sumit " ,this.state);
      this.setState({
        items
      })
  }
  AddPrice(e){
this.setState({
  price:e
})
  }
  onClickTapAdd() {

    this.setState({
      activeTab: "add"
    });
  }
  onClickTapPay() {
    this.setState({
      activeTab: "pay"
    });
  }
  onClickTapList() {
    this.setState({
      activeTab: "list"
    });
  }
  renderAdd() {
    if (this.state.activeTab !== "add") {
      return null;
    }
    return <Add />;
  }
  renderPay() {
    if (this.state.activeTab !== "pay") {
      return null;
    }
    return <Pay  items={this.state.items} />;
  }
  renderList() {
    if (this.state.activeTab !== "list") {
      return null;
    }
    return <List items={this.state.items}/>;
  }
  renderTap() {
    return (
      <div>
        <Button
          onClickFn={this.onClickTapAdd}
          isSelected={this.state.activeTab === "add" ? "active" : ""}
          onChange ={this.onClickInputChange}>
          Add
        </Button>
        <Button
          onClickFn={this.onClickTapPay}
          isSelected={this.state.activeTab === "pay" ? "active" : ""}
        >
          Pay
        </Button>
        <Button
          onClickFn={this.onClickTapList}
          isSelected={this.state.activeTab === "list" ? "active" : ""}
        >
          List
        </Button>
      </div>
    );
  }
  render() {
    return (
      <div className="container">
        <h1>Bakery time</h1>
        {this.renderTap()}
        {this.renderPay()}
        {this.renderList()}
        {this.renderAdd()}
         
        <form  onSubmit={this.handleSubmit}>
          <input type="text"value={this.state.name} onChange ={this.onClickInputChange} />
          <button type="submit" className="btn btn-primary" >
          onAdd
          </button>
          </form>
         <p>{this.state.price}€</p>
        <Slider
          min={1}
          max={10}
          value={this.state.price}
          ticks
          markerLabel={[]}
          style={{ fontSize: 15, width: "200px" }}
          onChange ={this.AddPrice}
        />
      
      </div>
    );
  }
}

export default App;
