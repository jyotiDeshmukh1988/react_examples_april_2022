import axios from "axios";
import React, { Component } from "react";

export default class AjaxDemo7 extends Component {
  fetchdata = async () => {
    const response1 = await axios.get("https://api.github.com/users/defunkt");
    console.log("first api returned data", response1.data);
  };

  render() {
    return <div onClick={this.fetchdata}>AjaxDemo7</div>;
  }
}
