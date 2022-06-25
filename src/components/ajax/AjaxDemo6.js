import axios from "axios";
import React from "react";

export default function AjaxDemo6() {
  const fetchData = async () => {
    const response1 = await axios.get("https://api.github.com/users/defunkt");
    console.log("first api returned data", response1.data);
    const response2 = await axios.get("https://api.github.com/users/evanphx");
    console.log("second api returned data", response2.data);
  };
  return <div onClick={fetchData}>AjaxDemo6</div>;
}
