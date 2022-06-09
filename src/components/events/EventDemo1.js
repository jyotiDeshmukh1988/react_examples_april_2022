import React from "react";

export default function EventDemo1() {
  const f1 = () => {
    alert("I am f1");
  };
  const add = (a, b) => {
    alert(a + b);
  };
  return (
    <>
      <div>EventDemo1</div>
      <button onClick={f1}>click me - f1</button>
      <button onClick={()=>{add(2,3)}}>click me - add</button>
    </>
  );
}
