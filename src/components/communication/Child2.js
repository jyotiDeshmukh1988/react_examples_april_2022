import React from "react";

export default function Child2(props) {
  return (
    <div style={{ border: "2px solid red", margin: "10px", padding: "10px" }}>
      Child2
      <br />
      <p>my parents data a is {props.a}</p>
    </div>
  );
}
