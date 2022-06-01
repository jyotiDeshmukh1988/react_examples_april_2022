import React, { Component } from "react";

export default class ForceUpdateDemo1 extends Component {
  cars = ["tata", "honda", "maruti"]; // class variable

  addNewCar = () => {
    this.cars.push("BMW");
    console.log(this.cars);
  };
  refreshUI = () => {
    this.forceUpdate();
  };

  render() {
    console.log("render called");
    return (
      <>
        <ul>
          {this.cars.map((car, ind) => (
            <li key={ind}>
              {ind}-----{car}
            </li>
          ))}
        </ul>
        <button onClick={this.addNewCar}>push a new car</button>
        <button onClick={this.refreshUI}>Refresh UI</button>
      </>
    );
  }
}
