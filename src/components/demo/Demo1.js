import React, { Component, PureComponent } from "react";

export default class Demo1 extends PureComponent {
  state = { name: "sanjay" };
  render() {

    console.log('render called')

    setTimeout(() => {
      this.setState({ name: "rahul" });
    }, 3000);

    return <div>Demo1 -{this.state.name}</div>;
  }
}
