import React, { useEffect, useState } from "react";

export default function StateDemo2() {
  const [count, setCount] = useState(0); // 0 default value

  const decrement = () => {
    setCount(count - 1);
  };
  const increment = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log(count);
  },[]);

  return (
    <>
      <br />
      <button onClick={decrement}>Decrement</button>
      &nbsp; <span>count is {count}</span> &nbsp;
      <button onClick={increment}>Increment</button>
    </>
  );
}
