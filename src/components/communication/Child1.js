import React from "react";

export default function Child1(props) {
  return (
    <div style={{ border: "2px solid red", margin: "10px", padding: "10px" }}>
      Child1
      <br />
      <p>my parents data a is {props.a}</p>
      <button onClick={() => props.setA(15)}>update data</button>
    </div>
  );
}
