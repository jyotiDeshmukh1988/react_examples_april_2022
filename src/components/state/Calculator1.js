import React, { useState } from "react";

export default function Calculator1() {
  const [num1, setNum1] = useState([]);
  const [num2, setNum2] = useState(0);
  const [total, setTotal] = useState(0);

  const changeHandler1 = (e) => {
    setNum1(+e.target.value);
  };
  const changeHandler2 = (e) => {
    setNum2(+e.target.value);
  };
  const addition = () => {
    setTotal(num1 + num2);
  };
  return (
    <>
      <div>Calculator Using Functional Comp</div>
      <input onChange={changeHandler1} />
      <input onChange={changeHandler2} />
      <button onClick={addition}>Add</button>
      <p>Total is {total}</p>
    </>
  );
}
