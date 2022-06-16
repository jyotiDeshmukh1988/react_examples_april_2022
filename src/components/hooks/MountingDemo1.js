import React, { Component } from "react";

export default class MountingDemo1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red",
    };
    console.log("constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    return { color: props.color };
  }
  componentDidMount() {
    document.getElementById("div1").style.color = this.state.color;
    console.log("componentDidMount");
  }
  render() {
    console.log("render");
    return <div id="div1">MountingDemo1 - color is {this.state.color}</div>;
  }
}
