import React from "react";
import client from "./Client";

export default function AjaxDemo3() {
  const fetchData = () => {
    client.get("/comments").then((response) => {
      console.log(response.data);
    });
  };
  return (
    <>
      <div>AjaxDemo3</div>
      <button onClick={fetchData}>Fetch Data</button>
    </>
  );
}
