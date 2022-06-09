import React, { useState } from "react";

export default function EventDemo5() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [total, setTotal] = useState(0);

  const addition = () => {
    setTotal(num1 + num2);
  };
  return (
    <>
      <div>EventDemo4</div>
      <input name="num1" onChange={(e) => setNum1(+e.target.value)} />
      <input name="num2" onChange={(e) => setNum2(+e.target.value)} />
      <button onClick={addition}>Add</button>
      <p>Addition is {total}</p>
    </>
  );
}
