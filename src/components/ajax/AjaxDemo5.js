import axios from "axios";
import React from "react";

export default function AjaxDemo5() {
  const fetchData = () => {
    axios
      .all([
        axios.get("https://api.github.com/users/defunkt"),
        axios.get("https://api.github.com/users/evanphx"),
      ])
      .then(([response1, response2]) =>
        console.log(response1.data, response2.data)
      );
  };
  return <div onClick={fetchData}>AjaxDemo5</div>;
}
// url-->response-->interceptor-->modifiedresponse-->comp = data=[]
