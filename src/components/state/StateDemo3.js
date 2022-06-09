import React, { Component } from "react";

export default class StateDemo3 extends Component {
  state = {
    count: 0,
  };
  incrementCountFiveTimes() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }
  increment() {
    // this.setState({ count: this.state.count + 1 });
    this.setState((a) => ({
      count: a.count + 1,
    }));
  }
  render() {
    return (
      <h2>
        counter works
        <div>Count - {this.state.count}</div>
        <button onClick={() => this.incrementCountFiveTimes()}>
          Increment By 5
        </button>
      </h2>
    );
  }
}
