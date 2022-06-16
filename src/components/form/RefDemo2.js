import React, { useRef } from "react";

export default function RefDemo2() {
  const myRef1 = useRef();
  const myRef2 = useRef();

  const add = () => {
    let value_1 = parseInt(myRef1.current.value);
    let value_2 = +myRef2.current.value;
    alert(value_1 + value_2);
  };
  return (
    <>
      <input name="textbox1" ref={myRef1} type="text" />
      <input name="textbox2" ref={myRef2} type="text" />
      <button onClick={add}>Add</button>
    </>
  );
}
