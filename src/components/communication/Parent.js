import React, { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

export default function Parent() {
  const [a, setA] = useState(10);
  return (
    <>
      <div style={{ border: "2px solid blue", margin: "10px",padding:'10px' }}>
        I am parent component <br/>
        my own data a is {a}
        <Child1 a={a} setA={setA}></Child1>
        <Child2 a={a} ></Child2>
      </div>
    </>
  );
}
