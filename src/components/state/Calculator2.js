import React, { Component } from "react";

export default class Calculator2 extends Component {
  state = {
    num1: 0,
    num2: 0,
    total: 0,
  };
  changeHandler1 = (e) => {
    this.setState({ num1: +e.target.value });
  };
  changeHandler2 = (e) => {
    this.setState({ num2: +e.target.value });
  };
  addition = () => {
    this.setState({ total: this.state.num1 + this.state.num2 });
  };
  render() {
    return (
      <>
        <div>Calculator Using Class Comp</div>
        <input onChange={this.changeHandler1} />
        <input onChange={this.changeHandler2} />
        <button onClick={this.addition}>Add</button>
        <p>Total is {this.state.total}</p>
      </>
    );
  }
}
