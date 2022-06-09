import React, { Component } from "react";

export default class StateDemo1 extends Component {
  state = {
    counter: 1,
  };
  increment = () => {
    this.setState({ counter: this.state.counter + 1 }, () => {
      console.log("updated value is ", this.state.counter);
    });
    // console.log("updated value is ", this.state.counter);
  };
  decrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };
  render() {
    return (
      <>
        <button onClick={this.decrement}>Decrement</button>
        &nbsp; {this.state.counter} &nbsp;
        <button onClick={this.increment}>Increment</button>
      </>
    );
  }
}
