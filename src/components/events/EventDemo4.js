import React, { useState } from "react";

export default function EventDemo4() {
  const [num1, setNum1] = useState(0);
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
      <div>EventDemo4</div>
      <input onChange={changeHandler1} />
      <input onChange={changeHandler2} />
      <button onClick={addition}>Add</button>
      <p>Addition is {total}</p>
    </>
  );
}
