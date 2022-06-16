import React, { Component } from "react";

export default class UpdatingDemo1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red",
    };
    console.log("constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    return {};
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    console.log('previous color was '+prevState.color+' current color is '+this.state.color)
    return null;
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  render() {
    console.log("render");
    return (
      <>
        <div id="div1">MountingDemo1 - color is {this.state.color}</div>
        <button
          onClick={() => {
            this.setState({ color: "yellow" });
          }}
        >
          update color
        </button>
      </>
    );
  }
}
