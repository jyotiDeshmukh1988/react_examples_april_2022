import React, { Component } from "react";

export default class EventDemo3 extends Component {
  state = {
    num1: 0,
    num2: 0,
    total: 0,
  };
  addition = () => {
    this.setState({ total: this.state.num1 + this.state.num2 });
  };
  changeHandler = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: +value });
  };
  render() {
    return (
      <>
        <div>EventDemo3</div>
        <input name="num1" onChange={this.changeHandler} />
        <input name="num2" onChange={this.changeHandler} />
        <button onClick={this.addition}>Add</button> <br />
        Addition is {this.state.total}
      </>
    );
  }
}
