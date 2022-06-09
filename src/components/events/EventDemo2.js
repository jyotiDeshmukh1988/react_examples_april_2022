import React, { Component } from "react";

export default class EventDemo2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "sanjay",
    };
    this.displayName2 = this.displayName2.bind(this);
  }

  displayName = () => {
    console.log(this.state.name);
  };
  displayName2() {
    console.log(this.state.name);
  }
  render() {
    return (
      <>
        <div>EventDemo2</div>
        <button onClick={this.displayName}>click me</button> &nbsp;
        <button onClick={this.displayName2}>click me-2</button>
      </>
    );
  }
}
