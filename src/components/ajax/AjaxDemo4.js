import React from "react";
import client from "./Client";

export default function AjaxDemo4() {
  const fetchData = () => {
    client.get("/users").then((response) => {
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
