import React, { useRef } from "react";

export default function RefDemo3() {
  let myRef1 = useRef();
  let myRef2 = useRef();

  const add = () => {
    let value_1 = parseInt(myRef1.value);
    let value_2 = parseInt(myRef2.value);
    alert(value_1 + value_2);
  };
  return (
    <>
      <input name="textbox1" ref={(x) => (myRef1 = x)} type="text" />
      <input name="textbox2" ref={(x) => (myRef2 = x)} type="text" />
      <button onClick={add}>Add</button>
    </>
  );
}
