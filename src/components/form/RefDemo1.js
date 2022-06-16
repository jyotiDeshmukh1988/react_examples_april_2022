import React, { Component } from "react";

export default class RefDemo1 extends Component {
  constructor(props) {
    super(props);
    this.myRef1 = React.createRef();
    this.myRef2 = React.createRef();
  }
  add = () => {
    let value_1 = parseInt(this.myRef1.current.value);
    let value_2 = parseInt(this.myRef2.current.value);
    alert(value_1 + value_2);
  };
  render() {
    return (
      <>
        <input name="textbox1" ref={this.myRef1} type="text" />
        <input name="textbox2" ref={this.myRef2} type="text" />
        <button onClick={this.add}>Add</button>
      </>
    );
  }
}
